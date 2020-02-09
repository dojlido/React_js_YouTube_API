import React from 'react';

import './IngredientList.css';

const IngredientList = props => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ingredient => (
          <li key={ingredient.id} onClick={props.removeIngredientHandler.bind(this, ingredient.id)}>
            <span>Ingredient name: {ingredient.title}</span>
            <span>Amount: {ingredient.amount}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
