import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import {RouteComponentProps} from "react-router";
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreatorBB from "../../store/actionsCreators";

interface AppState {
}

interface AppProps {
    ingMapStateToProps:any,
    totalPrice:number,
    purchaseInit:any, //change to properly type
    purchasedMapStateToProps:boolean
}

class Checkout extends Component<AppProps & RouteComponentProps, AppState> {

    private checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    private checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');  //change route after clik continue button
    };

    private ifCheckoutSummaryIsEmptyRedirect = () => {
        let summary = <Redirect to="/"/>;
        if(this.props.ingMapStateToProps)
        {
            const purchasedRedirect = this.props.purchasedMapStateToProps ? <Redirect to="/"/> : null;
             summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinue={this.checkoutContinueHandler}
                        ingredients={this.props.ingMapStateToProps}
                    />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    />
                </div>
            );
        }
        return summary;
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return this.ifCheckoutSummaryIsEmptyRedirect();
    }
}

const mapStateToProps = (state:any) => {
    return {
        ingMapStateToProps:state.burgerBuilder.ingredients,
        purchasedMapStateToProps:state.order.purchased
    };
};

export default connect(mapStateToProps)(Checkout);