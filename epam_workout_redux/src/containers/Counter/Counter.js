import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/action';


import {connect} from "react-redux";

class Counter extends Component {
    state = {
        counter: 0
    };

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addToCounter}   />
                <CounterControl label="Subtract 8" clicked={this.props.subtractCounter}   />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result - UPDATE reducer array</button>
                <br/>
                <ul>
                    {
                        this.props.storedResults.map(strResults => (
                            <li key={strResults.id} onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    ))
                    }

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr:state.ctr.counter,
        storedResults:state.storedResults.result
    };
};

const mapDispatchAction = dispatch => {
    return {
        incrementCounter: () => dispatch({type: actionTypes.INCREMENT}), // second parameter is called payload
        decrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        addToCounter: () => dispatch({type: actionTypes.ADD, value:10}),
        subtractCounter: () => dispatch({type: actionTypes.SUBSTTRACT, value:15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result:result}),
        onDeleteResult: (resultElementId) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId:resultElementId}),
};
};

//without state first parameter (for example stateLess component) is null
export default connect(mapStateToProps, mapDispatchAction)(Counter);