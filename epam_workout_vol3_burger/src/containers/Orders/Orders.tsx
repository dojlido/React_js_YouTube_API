import React, {Component} from "react";
import Order from '../../components/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

type OrderTypes = { order: any, loading:boolean, id:string, price:number, ingredients:any};

class Orders extends Component<any>{

    state: { orders: OrderTypes[], loading: boolean } = {
        orders: [],
        loading:true
    };

    private turnFireBaseObjectIntoArray = (response:any) => {

        const fetchedOrders : any = [];

        Object.values(response).map( (orders:any) => {
            fetchedOrders.push(
                orders
            );
        });

      return fetchedOrders[0];
    };

    componentWillMount(): void {
        axios.get('/orders.json').then(
            response => {
                    this.setState({loading:false, orders:this.turnFireBaseObjectIntoArray(response)})
            }
        ).catch(err =>{
            this.setState({loading:false})
        });
    }

    private spreadOrders = () => {

        const orders = {
            ...this.state.orders
        };

      return  orders;
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                {

                    Object.values(this.spreadOrders()).map((order: any, key: any) => (
                            <Order key={key}
                                   ingredients={order.ingredients}
                                   price={order.price}
                            />
                        )
                    )
                }
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);