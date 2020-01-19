import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

interface propBurger {
    ingredients:any;
}


const burger = (props:propBurger) => {
    let transformedIngredients:any  = Object.keys(props.ingredients).map(igredientKeyIngredientName => {
        return [...Array(props.ingredients[igredientKeyIngredientName])].map((_, i) => {
           return <BurgerIngredient key={igredientKeyIngredientName as string + i as string} type={igredientKeyIngredientName as string} />
        });
    }).reduce((arr, el) : any  => {
        return arr.concat(el).reverse();
    }, []);

    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please start adding Ingredients!</p>;
    }

     return (
         <div className={'Burger'}>
             <BurgerIngredient type={'bread-top'} />
             {transformedIngredients}
             <BurgerIngredient type={'bread-bottom'} />
         </div>
     );
};
export default burger;

