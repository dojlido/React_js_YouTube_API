import React, {Component} from 'react';

//it's a function that return higher order component
import {connect} from 'react-redux';
import * as ActionCreator from '../reduxStore/actions/actions'

class ReduxAndReact extends Component {
    render() {
        return (
            <div>
                <br/>
                <div>
                    Age:
                    <span>
                        {this.props.age}
                    </span>
                </div>
                <button onClick={this.props.onAgeUp}>Age UP:</button>
                <button onClick={this.props.onAgeDown}>Age DOWN:</button>

                <div>History</div>
                <div>
                    <ul>
                            {
                                this.props.history.map((el) => {
                                 return  (<li key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                                            {el.age}
                                          </li>);
                                })
                            }

                    </ul>
                </div>
                <hr/>
                <div>
                    <br/>
                    <div>
                        A:
                        <span>
                        {this.props.a}
                    </span>
                        <button onClick={() => this.props.updateA(this.props.b)}>Update A:</button>
                        {console.log(this.props.loading )}
                        {this.props.loading && <img src="https://media.giphy.com/media/13ZBDVRKoCbqU0/source.gif" width={300} height={250} alt=""/>}
                    </div>
                    <br/>
                    <div>
                        B:
                        <span>
                        {this.props.b}
                    </span>
                        <button onClick={() => this.props.updateB(this.props.a)}>Update B:</button>
                    </div>
                </div>
            </div>
        );
    }
}

//everything is mapped to props (the state too)
const mapStateToProps = (state) => {
    return {
        age: state.firstReducer.age,
        history: state.firstReducer.history,
        a: state.secondReducer.a,
        b: state.secondReducer.b,
        loading: state.secondReducer.loading

    }
};
const mapDispachToProps = (dispach) => {
    return {
        onAgeUp: () => dispach({type: 'AGE_UP', value:1}),
        onAgeDown: () => dispach({type: 'AGE_DOWN', value:1}),
        onDelItem : (id) => dispach({type: 'DEL_ITEM', key:id}),
        updateA : (b) => dispach(ActionCreator.updateA(b)),
        updateB : (a) => dispach(ActionCreator.updateB(a))
    }
};

export default connect (mapStateToProps, mapDispachToProps)(ReduxAndReact);