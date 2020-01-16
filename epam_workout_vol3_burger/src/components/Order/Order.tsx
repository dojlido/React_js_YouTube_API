import React from 'react';

interface orderProps {
    ingredients:any; //to change to properly type
    price:string;
}


const orderIngredients = (orderIngredients:any) => {
    let orderIngredientsList:any = '';

    if(orderIngredients !== undefined) {
        orderIngredientsList = Object.entries(orderIngredients).map(([orderIngredientName, orderIngredientAmount]) =>
            <p key={orderIngredientName}> {orderIngredientName} : {orderIngredientAmount}</p>
        );
    }


    return orderIngredientsList;
};

const order = (props:orderProps) => (
    <div className={'Order'}>
        Ingredients: {orderIngredients(props.ingredients)}
        <p>Total Price <strong>PLN {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
);

export default order;