import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button';

interface AppState {
}

interface AppProps {
    ingredients:any;
    purchaseCancel:any;
    purchaseContinue:any;
    price:number;
}

class OrderSummary extends Component<AppProps,AppState> {

    private ingredientSummary = (ingredients:any):any => {
        return Object.keys(ingredients)
            .map((ingredientKey:string) => {
                return <li key={ingredientKey}><span style={{textTransform:'capitalize'}}>{ingredientKey}</span> : {ingredients[ingredientKey]}</li>;
            });
    };

    render() {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {
                        this.ingredientSummary(this.props.ingredients)
                    }
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType={'danger'} clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType={'success'} clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}



export default OrderSummary;

