import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actionTypes';

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
        incrementCounter: () => dispatch(actionCreators.increment()), // second parameter is called payload
        decrementCounter: () => dispatch(actionCreators.decrement()),
        addToCounter: () => dispatch(actionCreators.add(10)),
        subtractCounter: () => dispatch(actionCreators.substract(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (resultElementId) => dispatch(actionCreators.deleteResult(resultElementId)),
};
};

//without state first parameter (for example stateLess component) is null
export default connect(mapStateToProps, mapDispatchAction)(Counter);