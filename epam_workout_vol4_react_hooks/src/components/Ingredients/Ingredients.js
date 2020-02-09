import React, { useEffect, useCallback, useReducer} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

import ErrorModal from "../UI/ErrorModal";

const ingredientsReducer = (currentIngredients, action) => {
    switch (action.type) {
        case 'FILTER_INGRIEDIENTS':
            return action.ingredients;
        case 'SEND_INGREDIENTS':
            return [...currentIngredients, action.ingredient];
        case 'DELETE_INGREDIENTS':
             return currentIngredients.filter(ingredient => ingredient.id !== action.id);
        default:
            throw new Error('useReducer_v1 Error something get wrong !!'); //should always take some action in other case shoulfd throw error
    }
};

const httpRequestReducer = (httpState, action) => {
    switch (action.type) {
        case 'SEND_REQUEST':
            return { loading:true, error:0 };
        case 'GET_RESPONSE':
            return { ...httpState, loading:false };
        case 'REQUEST_ERROR':
            return { loading:false, error: action.errorMessage };
        case 'CLEAR_REQUEST_ERROR':
            return { ...httpState, error:0 };
        default:
            throw new Error('useReducer_v2 Error something get wrong !!'); //should always take some action in other case shoulfd throw error
    }
};

const Ingredients = () => {
    const [getReducerStateIngredients, dispatchIngredients] = useReducer(ingredientsReducer, []);
    const [getReducerHttpState, dispatchHttp] = useReducer( httpRequestReducer, {loading:false, error:null} );


    //const [useStateIngredients, setStateIngredients] = useState([]); //alaways return array of two elements
    // const [getStateLoading, setStateLoading] = useState(false); //alaways return array of two elements
    // const [getStateError, setStateError] = useState(); //alaways return array of two elements

    //TODO USEEFFECT ANALIZE
    useEffect(() => {  //it's work like componentDidMount .. (when second parameter is passed -> an empty array) wihout it it works/behave like componentDidUpdate

    }, []); //second parameter empty array trigger useEffect only when component will render after page refresh - no threat/danger from the endless loop (infinity loop)
    //where we pass specyfic varaible to useEffect it will re-render dom-elemnt only for this specyfic element

    //minimum configuration
    const sendIngredientsList = (ingredient) => {
        dispatchHttp({type:'SEND_REQUEST'});
        fetch('https://dojlido-react-hooks.firebaseio.com/ingredients.json', {  //is function build in into modern browers ; first param url second is optional DB connect configurration param // default metho is defined to GET
            method:'POST',
            body: JSON.stringify(ingredient),
            headers:{'Content-Type': 'application/json'}
        }).then( response => {
            dispatchHttp({type:'GET_RESPONSE'});
            return  response.json(); //get the body of dataBase response
        }).then( responseData => {
            dispatchIngredients({type:'SEND_INGREDIENTS', ingredient:{id: responseData.name, ...ingredient}} );
            }
        ).catch( error => {
            dispatchHttp({type:'REQUEST_ERROR', errorMessage:'Something went wrong :( Please try again -> '+error.message } );
        });
    };

    //minimum configuration
    const removeIngredientHandler = (ingredientId) => {
        dispatchHttp({type:'SEND_REQUEST'});
        fetch(`https://dojlido-react-hooks.firebaseio.com/ingredients/${ingredientId}.json`, {  //is function build in into modern browers ; first param url second is optional DB connect configurration param // default metho is defined to GET
            method:'DELETE',
        }).then( response => {
            dispatchIngredients({type:'DELETE_INGREDIENTS', id:ingredientId} );
            dispatchHttp({type:'GET_RESPONSE'});
        }).catch( error => {
            dispatchHttp({type:'REQUEST_ERROR', errorMessage:'Something went wrong :( Please try again -> '+error.message } );
        });
    };

    const addIngredientHandler = (ingredient) => {
         sendIngredientsList(ingredient);
    };

    const filteredIngriedientsHandler = useCallback(filteredIngredients => {
        dispatchIngredients({type:'FILTER_INGRIEDIENTS', ingredients:filteredIngredients} );
    }, []);

    const errorModalCloseHeandler = () => {
        dispatchHttp({type:'CLEAR_REQUEST_ERROR'});
    };

    const errorMessage = () => {
        return getReducerHttpState.error &&
            <ErrorModal onClose={ errorModalCloseHeandler }>
                {getReducerHttpState.error}
            </ErrorModal>  ;
    };

    return (
        <div className="App">
            {errorMessage()}
            <IngredientForm
                onAddIngredientHandler={addIngredientHandler}
                loading={getReducerHttpState.loading}
            />
            <section>
                <Search filteredIngriedientsHandler={filteredIngriedientsHandler}  />
                <IngredientList ingredients={getReducerStateIngredients} removeIngredientHandler={removeIngredientHandler}  />
                {
                    // cos.map(([orderIngredientName, orderIngredientAmount]) =>
                    //     <p key={orderIngredientName}> {orderIngredientName} : {orderIngredientAmount}</p>
                    // )
                }
            </section>

        </div>
    );
};

export default Ingredients;
