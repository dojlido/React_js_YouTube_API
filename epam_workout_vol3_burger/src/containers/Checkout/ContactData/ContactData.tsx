import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';

import axios from '../../../axios-orders'

import Spinner from '../../../components/UI/Spinner/Spinner';
import {RouteComponentProps} from "react-router";
import Input from '../../../components/UI/Input/Input';

import {connect} from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreatorBurgerOrders from "../../../store/actionsCreators";
import {updateObject} from "../../../shared/utility";
import {l} from '../../../helper/helper';


interface AppState {
}

interface AppProps {
    loadingStateToProps:boolean;
    ingredientsMapStateToProps:any; //todo change to properly type
    totalPriceMapStateToProp:number;
    sendOrderData:any; //todo change to properly type
}

class ContactData extends Component<AppProps & RouteComponentProps, AppState> {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                isTouched:false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                isTouched:false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                valid:false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                isTouched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                isTouched:false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation:{ //TODO no rules of validity for <select>
                },
                valid:true
            }
        },
        formIsValid:false
    };

    public checkFormIsValid = (updatedValueOfInputs: any) => {
        let formIsValid = true;

        for (let inputName in updatedValueOfInputs) {
            formIsValid = updatedValueOfInputs[inputName].valid && formIsValid;
        }

        return formIsValid;

    };

    public chekValidity = (value:any, rules:any) => {
        let isValid = true;

        if(rules.required)
        {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength)
        {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength)
        {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    };

    private orderInputsValue = () => {

        const formInputsData : { [key: string]: any } = {};

        const orderForm : { [key: string]: any } = {
            ...this.state.orderForm       //TODO clone state by spread operator don't prevent from state mutation !!!
        };

        for (let nameOfInputElement in orderForm )
        {
            formInputsData[nameOfInputElement] = orderForm[nameOfInputElement].value;
        }
        return formInputsData;
    };

    private orderHandler = (event:any) => {
        event.preventDefault();

         const order = {
            ingredients: this.props.ingredientsMapStateToProps,
            price: this.props.totalPriceMapStateToProp,
            orderInputsValue:this.orderInputsValue()
        };


        this.props.sendOrderData(order, this.props.history.push('/'));
    };

    private inputChangeHandler = (event:any, inputName:string) => {

        const orderForm : { [key: string]: any; } = this.state.orderForm;
        const updatedValueOfInput = updateObject(orderForm[inputName],
            {
                value:event.target.value,
                valid:this.chekValidity(event.target.value, orderForm[inputName].validation),
                isTouched:true
            });

        const updatedValueOfInputs = updateObject(this.state.orderForm,
            {
                [inputName]:updatedValueOfInput
            });

        this.setState({
            orderForm: updatedValueOfInputs,
            formIsValid : this.checkFormIsValid(updatedValueOfInputs)
        });
    };


    private returnFormWhenOrderIsReady = () => {
        const formFromArray = [];

        const orderForm: { [key: string]: any } = {
            ...this.state.orderForm
        };

        for (let nameOfInputElement in orderForm )
        {
            formFromArray.push(
                {
                    inputName:nameOfInputElement,
                    inputAtributes: orderForm[nameOfInputElement],
                }
            );
        }
        let contactForm = (
            <form onSubmit={this.orderHandler}>
                {
                    formFromArray.map(formElem => (
                        <Input
                            key={formElem.inputName}
                            elementType={formElem.inputAtributes.elementType}
                            elementConfig={formElem.inputAtributes.elementConfig}
                            value={formElem.inputAtributes.value}
                            changed={(event:any) => this.inputChangeHandler(event, formElem.inputName)}
                            isTouched={formElem.inputAtributes.isTouched}
                            shouldValidate={formElem.inputAtributes.validation}  //TODO if validation atribute is not set in 'orderForm' state it will return false ..
                            invalid={!formElem.inputAtributes.valid}
                        />
                    ))
                }
                <Button
                    btnType="success"
                    disabled={!this.state.formIsValid}
                >
                    ORDER
                </Button>
            </form>
        );
        if( this.props.loadingStateToProps )
        {
            contactForm = <Spinner/>
        }
        return contactForm;
    };

    render () {
        return(
            <div className={'ContactData'}>
                <h4><strong>Enter your Contact Data</strong></h4>
                {this.returnFormWhenOrderIsReady()}
            </div>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        loadingStateToProps:state.order.loading,
        ingredientsMapStateToProps:state.burgerBuilder.ingredients,
        totalPriceMapStateToProp:state.burgerBuilder.totalPrice,
    };
};

const mapDispatchToProps  = (dispatch:any) => {
    return {
        sendOrderData:  (orderDataParam:any, historyBack:any) => dispatch( actionCreatorBurgerOrders.sendOrderData(orderDataParam,  historyBack) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));