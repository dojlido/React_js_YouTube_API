import React, {useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
    const {filteredIngriedientsHandler} = props;
    const [getStateEnteredFilterValue, setStateEnteredFilterValue] = useState(''); //alaways return array of two elements
    const refInputEnteredFilterValue = useRef();


    useEffect(
        () => {  //it's work like componentDidMount .. (when second parameter is passed -> an empty array) wihout it it works/behave like componentDidUpdate
          const requestTimer = setTimeout(() => {
                if (getStateEnteredFilterValue === refInputEnteredFilterValue.current.value) // current is inBuild atribute of useRefs()
                {
                    const querySearchParam =                    //firebase support querySearch param
                        getStateEnteredFilterValue.length === 0
                            ? ''
                            : `?orderBy="title"&equalTo="${getStateEnteredFilterValue}"`;

                    fetch('https://dojlido-react-hooks.firebaseio.com/ingredients.json' + querySearchParam)
                        .then(response => response.json())
                        .then(responseData => {
                            const loadedIngredients = [];
                            for (const key in responseData) {
                                loadedIngredients.push({
                                    id: key,
                                    title: responseData[key].title,
                                    amount: responseData[key].amount
                                });
                            }
                            //setStateEnteredFilterValue(loadedIngredients);
                            filteredIngriedientsHandler(loadedIngredients);
                        });
                }
            }, 200);

            return () => {
              clearTimeout(requestTimer); //this option gives more memory effiction
            };    // if you return something it has to be a function -> it cause the cleanUp, it's cleans the value of variables in useEffect function, in this case requestTimer const

        }, [getStateEnteredFilterValue, filteredIngriedientsHandler, refInputEnteredFilterValue]
    );

    return (
        <section className="search">
            <Card>
                <div className="search-input">
                    <label>Filter by Title</label>
                    <input
                        ref={refInputEnteredFilterValue}
                        type="text"
                        value={getStateEnteredFilterValue}
                        onChange={
                            e => setStateEnteredFilterValue(e.target.value)
                        }
                    />
                </div>
            </Card>
        </section>
    );
});

export default Search;
