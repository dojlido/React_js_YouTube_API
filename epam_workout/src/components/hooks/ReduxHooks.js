import {useSelector, useDispatch} from "react-redux";
import React from "react";


export default () => {
    const counter = useSelector(state => state.reduxHooksReducer.counter);
    const dispatch = useDispatch();

    let styleButton = {backgroundColor: 'silver',
        color:'whitesmoke',
        border: '2px solid whitesmoke',
        borderRadius: '2px',
        padding: '10px 10px 10px 10px'};

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button style={styleButton} onClick={ (() => dispatch({type:'INCREMENT'})) }>Increment</button>
            <button style={styleButton} onClick={ (() => dispatch({type:'DECREMENT'})) }>Decrement</button>

        </div>
    );
}