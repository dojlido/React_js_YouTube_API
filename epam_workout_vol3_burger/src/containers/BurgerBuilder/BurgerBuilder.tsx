import React from 'react';
import {Component} from "react";
import axios from '../../axios-orders'

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../containers/BurgerBuilder/BuildControlls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {RouteComponentProps} from "react-router";

import * as actionTypes from '../../store/actions';
import {connect} from 'react-redux';

type ingredientsType = 'salad' | 'bacon' | 'cheese' | 'meat';

interface MyProps {
    totalPrice:number,
    ingMapStateToProps:any,
    ingredientAddedDispatch:any,
    ingredientRemoveDispatch:any,
}

interface MyState {

}

class BurgerBuilder extends Component<MyProps & RouteComponentProps, MyState> {
    state = {
        purchasing: false,
        loading: false,
        error:false
    };

    componentDidMount(): void {
        //TODO take price of ingriedients from dataBase
        // axios.get('https://react-my-burger-dojlido.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //     }).catch(error => {
        //     this.setState({error:true});
        // });
    }

    private updatePurchaseState(ingredients: { [key: string]: number }) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
       return  sum > 0;
    }

    private purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    private purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    private purchaseContinueHandler = () => {
        this.checkoutController(); //props.history from React Router component
    };

    private checkoutController = () => {
        return this.props.history.push('/checkout'); //props.history from React Router component
    };

    private disableInfoHandler = (): any => {
        //TODO here is define type of object key - is necessary for TS
        const disableInfo: { [key: string]: any } = {
            ...this.props.ingMapStateToProps
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return disableInfo;
    };

    private spinnerForOrderSummary = (): any => {
        let orderSummary = null;
        if(this.props.ingMapStateToProps) {
             orderSummary = <OrderSummary ingredients={this.props.ingMapStateToProps}
                                             purchaseCancel={this.purchaseCancelHandler}
                                             purchaseContinue={this.purchaseContinueHandler}
                                             price={this.props.totalPrice}
            />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return orderSummary;

    };

    private ifIssetIngredientsReturnBurger = () => {
        let burger = this.state.error ? <p>Kaboom!</p> : <Spinner/>;
       if(this.props.ingMapStateToProps) {
           burger = (
               <Aux>
                   <Burger ingredients={this.props.ingMapStateToProps}/>
                   <BuildControls
                       ingredientAdded={this.props.ingredientAddedDispatch}
                       ingredientRemove={this.props.ingredientRemoveDispatch}
                       disabled={this.disableInfoHandler()}
                       price={this.props.totalPrice}
                       purchaseable={this.updatePurchaseState(this.props.ingMapStateToProps)}
                       ordered={this.purchaseHandler}
                   />
               </Aux>
           );
       }

        return burger;
    };


    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {this.spinnerForOrderSummary()}
                </Modal>
                {this.ifIssetIngredientsReturnBurger()}
            </Aux>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        ingMapStateToProps:state.ingredients,
        totalPrice:state.totalPrice
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        ingredientAddedDispatch:  (ingredientNameParam:string) => dispatch({type:actionTypes.ADD_INGREDIENT, ingredientName: ingredientNameParam}),
        ingredientRemoveDispatch: (ingredientNameParam:string) => dispatch({type:actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientNameParam})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));