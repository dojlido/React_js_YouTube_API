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

import {connect} from 'react-redux';
import * as actionCreatorBB from '../../store/actionsCreators'; //aitomatically import index file from actions folder

import {l} from '../../helper/helper';


type ingredientsType = 'salad' | 'bacon' | 'cheese' | 'meat';

interface MyProps {
    totalPrice:number,
    ingredientsMapStateToProps:any,
    ingredientAddedDispatch:any,
    ingredientRemoveDispatch:any,
    fetchIngriedientError:any,
    initialIngriedient:any,
    purchaseInit:any,
    error:boolean
}

interface MyState {

}

class BurgerBuilder extends Component<MyProps & RouteComponentProps, MyState> {
    state = {
        purchasing: false,
    };

    componentDidMount(): void {
        this.props.initialIngriedient();
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
        this.props.purchaseInit();
        return this.props.history.push('/checkout'); //props.history from React Router component
    };

    private disableInfoHandler = (): any => {
        //TODO here is define type of object key - is necessary for TS
        const disableInfo: { [key: string]: any } = {
            ...this.props.ingredientsMapStateToProps
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return disableInfo;
    };

    private spinnerForOrderSummary = (): any => {
        let orderSummary = null;
        if(this.props.ingredientsMapStateToProps) {
             orderSummary = <OrderSummary ingredients={this.props.ingredientsMapStateToProps}
                                             purchaseCancel={this.purchaseCancelHandler}
                                             purchaseContinue={this.purchaseContinueHandler}
                                             price={this.props.totalPrice}
            />;
        }

        return orderSummary;

    };

    private ifIssetIngredientsReturnBurger = () => {
        let burger = this.props.fetchIngriedientError ? <p>Kaboom ! Something went wrong :(</p> : <Spinner/>;
       if(this.props.ingredientsMapStateToProps) {
           burger = (
               <Aux>
                   <Burger ingredients={this.props.ingredientsMapStateToProps}/>
                   <BuildControls
                       ingredientAdded={this.props.ingredientAddedDispatch}
                       ingredientRemove={this.props.ingredientRemoveDispatch}
                       disabled={this.disableInfoHandler()}
                       price={this.props.totalPrice}
                       purchaseable={this.updatePurchaseState(this.props.ingredientsMapStateToProps)}
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
        ingredientsMapStateToProps:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        fetchIngriedientError:state.burgerBuilder.error,
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        ingredientAddedDispatch:  (ingredientNameParam:string) => dispatch(actionCreatorBB.addIngredient(ingredientNameParam)),
        ingredientRemoveDispatch: (ingredientNameParam:string) => dispatch(actionCreatorBB.removeIngredient(ingredientNameParam)),
        initialIngriedient: () => dispatch(actionCreatorBB.initialIngriedient()),
        purchaseInit: () => dispatch(actionCreatorBB.purchaseInit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));