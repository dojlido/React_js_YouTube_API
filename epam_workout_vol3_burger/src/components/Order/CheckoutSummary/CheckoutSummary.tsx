import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button';

interface CheckoutSummaryInterface {
    ingredients: any; //todo set properly types
    checkoutCancelled:any;
    checkoutContinue:any;
}

const checkoutSummary = (props: CheckoutSummaryInterface) => {
    return (
        <>
            <div className={'CheckoutSummary'}>
                <h1>We hope is tastes well!</h1>
                <div className={'BurgerCheckoutSummaryWrapper'}>
                    <Burger ingredients={props.ingredients}/>
                </div>
            </div>
            <div className={'CheckoutSummaryButtons'}>
                <Button
                    clicked={props.checkoutCancelled}
                    btnType={'danger'}>CANCEL</Button>
                <Button
                    clicked={props.checkoutContinue}
                    btnType={'success'}>CONTINUE</Button>
            </div>
        </>
    );
};

export default checkoutSummary;