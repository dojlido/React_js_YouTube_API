import React, {Component} from 'react';

export default class ReduxAndReactDevidedReducer extends Component {
    render() {
        return (
            <div>
                <br/>
                <div>
                    A:
                    <span>
                        {this.props.a}
                    </span>
                    <button onClick={this.props.updateA}>Update A:</button>
                </div>
                <br/>
                <div>
                    B:
                    <span>
                        {this.props.b}
                    </span>
                    <button onClick={this.props.updateB}>Update B:</button>
                </div>
            </div>
        );
    }
}
