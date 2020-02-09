import React, {useState} from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';

import './IngredientForm.css';
import '../UI/LoadingIndicator.css';

//import {l} from '../helper/helper';
//qwe
const IngredientForm = React.memo(props => {
    //const [useStateCounter, setUseStateCounter] = useState(0);

    // const [useInputState, setInputState] = useState({   //TODO in this case we pass objecy to use state. but beware ! You have to remember to pass all object atributes to setInputState is not user friendly
     //     title: '',
    //     amount: ''
    // }); //alaways return array of two elements


     const [inputStateTitle, setInputTitle]   = useState(''); //alaways return array of two elements
     const [inputStateAmount, setInputAmount] = useState(''); //alaways return array of two elements

    const submitHandler = event => {
        event.preventDefault();
        props.onAddIngredientHandler({title:inputStateTitle,amount:inputStateAmount });
    };

    const loadindSpinner = (isLoading) => {
      return  isLoading && <LoadingIndicator/>;
    };

    return (
        <section className="ingredient-form">

            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input type="text" id="title" value={inputStateTitle} onChange={
                            e => setInputTitle(e.target.value)
                        }
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" id="amount" value={inputStateAmount}
                               onChange={
                                   e =>
                                       setInputAmount(e.target.value)
                               }

                        />
                        {/*todo example of html elemnt with useState that take object as param*/}
                        {/*<input type="number" id="amount" value={useInputState.amount}*/}
                        {/*       onChange={*/}
                        {/*           e => {*/}
                        {/*               const newAmount = e.target.value;*/}
                        {/*               setInputState(prevInputState => ({  //prevInputState it give gurantee that state is always set*/}
                        {/*                   title: prevInputState.title, //prevInputState it give gurantee that state is always set*/}
                        {/*                   amount: newAmount*/}
                        {/*               }))*/}
                        {/*           }*/}
                        {/*       }*/}
                        {/*/>*/}
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                        {loadindSpinner(props.loading)}
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default IngredientForm;
