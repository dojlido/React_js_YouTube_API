import React, {Component} from 'react';

const Temp = (props) => {
    console.log('render TEMP 1');
    return (<div>{props.val}</div>);
};

export default class LifeCycleCompForAjax extends Component {

    state = {
        val:1
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {val:1};
            })
        }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('nextState ', nextState);
        console.log('thisState ', this.state);
        return(this.state.val === nextState.val ? false : true);
    }

    render() {
        return (
                <Temp val={this.state.val}></Temp>
        );
    }
}
