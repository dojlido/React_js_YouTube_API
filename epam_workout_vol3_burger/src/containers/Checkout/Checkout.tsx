import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import {RouteComponentProps} from "react-router";
import {Route} from 'react-router-dom';


interface AppState {
}

interface AppProps {

}

class Checkout extends Component<AppProps & RouteComponentProps, AppState> {
    state = {
        ingredients: null,
        totalPrice:0
    };

    componentWillMount(): void {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients: { [key: string]: any }  = {};
        let price:any  = 0; //todo zrefactorowac

        for (let ingredientKeyValue of query.entries() )
        {
            if(ingredientKeyValue[0] === 'totalPrice')
            {
                price = ingredientKeyValue[1];
            }
            else {
                ingredients[ingredientKeyValue[0]] = +ingredientKeyValue[1];
            }
        }
        this.setState({ingredients:ingredients, totalPrice:price});
    }

    private checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    private checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');  //change route after clik continue button
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients}/>
                        <Route
                            path={this.props.match.path + '/contact-data'}
                            render={() => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />)}
                        />
            </div>
        );
    }
}

export default Checkout;