import React, {Component} from 'react';

const MyInput = (props) => {
    return(
        <input type="text" ref={props.inputRef} />
    );
};

const FunctionComp = () => {
    let inputRef = null;
    let onClick = () => {
        inputRef.focus();
    };

    return (
        <div>
            <div>
                <span>Input 1</span>
                <MyInput
                    inputRef={(input)=>{inputRef = input}}
                />
            </div>
            <div>
                <span>Input 2</span>
                <input type="text"/>
            </div>
            <div>
                <span>Input 2</span>
                <input onClick={onClick} type="submit" className="submit"/>
            </div>
        </div>

    );
};

export default class ReactRefs extends Component {
    onClick = () => {
        console.log(this.firstName.value);
    };

    onKeyUp = (target, event) => {
        const KEY_CODE_ENTER = 13;
        if(event.keyCode === KEY_CODE_ENTER) {
            switch (target) {
                case 'firstName':
                    this.lastName.focus();
                    break;
                default:
                    this.lastName.focus();
                    break;
            }
        }
    };

    render() {
        return (
            <div>
                <FunctionComp></FunctionComp>
                <br/>
                <br/>
                <div>
                    <span>First Name</span>
                    <input
                        ref={(input)=>{this.firstName = input}}
                        type="text"
                        className="type"
                        onKeyUp={this.onKeyUp.bind(this, 'firstName')}
                    />
                </div>
                <div>
                    <span>Last Name</span>
                    <input
                        ref={(input)=>{this.lastName = input}}
                        type="text"
                        className="type"
                    />
                </div>
                <div>
                    <span>Age</span>
                    <input
                        ref={(input)=>{this.age = input}}
                        type="text"
                        className="type"
                    />
                </div>
                <input
                    type="submit"
                    className="submit"
                    ref={(input)=>{this.submit = input}}
                    onClick={this.onClick}
                />
            </div>
        );
    }
}
