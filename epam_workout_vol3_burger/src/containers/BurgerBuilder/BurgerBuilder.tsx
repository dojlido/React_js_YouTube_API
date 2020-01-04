import React from 'react';
import {Component} from "react";
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../containers/BurgerBuilder/BuildControlls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:2,
    bacon:0.7
};

type ingredientsType = 'salad' | 'bacon' | 'cheese' | 'meat';


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false,
        purchasing: false
    };

    private updatePurchaseState (ingredients: { [key: string]: number }) {
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchaseable: sum > 0});
    }

    private addIngredientHandler = (ingredientsType:ingredientsType) => {
            const oldCount = this.state.ingredients[ingredientsType];
            const updateCount = oldCount + 1;

            const updatedIngredients = {
                ...this.state.ingredients
            };

            updatedIngredients[ingredientsType] = updateCount;

            const priceAddition = INGREDIENT_PRICES[ingredientsType];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice + priceAddition;

            this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
    };

    private removeIngredientHandler = (ingredientsType:ingredientsType) => {
        const oldCount = this.state.ingredients[ingredientsType];
        if(oldCount <= 0)
        {
            return;
        }
        const updateCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[ingredientsType] = updateCount;

        const priceDeduction = INGREDIENT_PRICES[ingredientsType];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    };

    private purchaseHandler = () => {
            this.setState({purchasing:true});
    };

    private purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    };

    private purchaseContinueHandler = () => {
        //this.setState({purchasing:false});
        alert('You continue!')
    };

    private disableInfoHandler = ():any => {
        //TODO here is define type of object key - is necessary for TS
        const disableInfo : { [key: string]: any } = {
            ...this.state.ingredients
        };

        for (let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return disableInfo;
    };
        render () {
     return (
         <Aux>
             <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 <OrderSummary ingredients={this.state.ingredients}
                              purchaseCancel={this.purchaseCancelHandler}
                              purchaseContinue={this.purchaseContinueHandler}
                              price={this.state.totalPrice}
                 />
             </Modal>
             <Burger ingredients={this.state.ingredients}/>
             <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={this.disableInfoHandler()}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
             />
         </Aux>
     );
 }
}

export default BurgerBuilder;