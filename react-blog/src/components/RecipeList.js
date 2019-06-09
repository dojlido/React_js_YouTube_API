import React, { Component  } from 'react';
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'


export default class RecipeList extends Component{

    render() {
        const { recipes, handleDetails } = this.props;
        return(
            <React.Fragment>
                <RecipeSearch />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                                <h1 className="text-slanted">
                                 recipe list
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            {
                              recipes.map( recipe => {
                                  return(
                                      //PASS OBJECT BY ID
                                      // eslint-disable-next-line
                                      <Recipe key={recipe.recipe_id}
                                              recipe={recipe}
                                              handleDetails={()=>handleDetails(0,recipe.recipe_id)}
                                      />
                                  );
                              })
                            }
                        </div>
                    </div>
                <Recipe />
            </React.Fragment>
        )
    }


}