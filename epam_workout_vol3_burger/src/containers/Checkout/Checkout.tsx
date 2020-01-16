import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import {RouteComponentProps} from "react-router";
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

interface AppState {
}

interface AppProps {
    ingMapStateToProps:any,
    totalPrice:number
}

class Checkout extends Component<AppProps & RouteComponentProps, AppState> {

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
                    ingredients={this.props.ingMapStateToProps}/>
                        <Route
                            path={this.props.match.path + '/contact-data'}
                            component={ContactData}
                        />
            </div>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        ingMapStateToProps:state.ingredients,
    };
};

export default connect(mapStateToProps)(Checkout);