import React, {Component} from "react";
import {connect} from 'react-redux';

import Order from '../../components/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import * as actionCreatorOrders from "../../store/actionsCreators";
import Spinner from '../../components/UI/Spinner/Spinner';
import {l} from '../../helper/helper';

type OrderTypes = { order: any, loading:boolean, id:string, price:number, ingredients:any};

class Orders extends Component<any>{

    componentDidMount(): void {
        this.props.getOrderData();
    }

    private dispatchedOrders = () => {
      return this.props.ordersMapStateToProps;
    };

    private getAvailableOrders = () => {
        let orders:any = <Spinner/>;
        if(!this.props.loadingMapStateToProps) {
            orders = Object.values(this.dispatchedOrders()).map((order: any, key: any) => (
                    <Order key={key}
                           ingredients={order.ingredients}
                           price={order.price}
                    />
                )
            )
        }

        return orders;
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <div>
                {this.getAvailableOrders()}
            </div>
        );
    }
}

const mapStateToProps = (state:any) => {
    return {
        ordersMapStateToProps:state.order.orders,
        loadingMapStateToProps:state.order.loading,
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        getOrderData:  () => dispatch(actionCreatorOrders.getOrderData()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));