import React, { Component, PureComponent } from 'react';

import SpreadOperator from './components/ecms6/SpreadOperator';
import RestOperator from './components/ecms6/RestOperator';
import ShowHideSectionConditionally from './components/showHideSectionConditionally/ShowHideSectionConditionally';
import ReactStyligExample from './components/reactStylingExample/ReactStyligExample';
import PropAsStateInChildComponent from './components/propAsStateInChildComponent/PropAsStateInChildComponent';
import AuthContext from './components/context/auth-context';

//react Router
import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/menu/Menu';
//end React Router

import MethodReferenceExample from './components/MethodReferenceExample'


interface AppState {
    counter: number;
    removeSectionFromReactDom:boolean;
    auth:boolean;
    propProducts:object;
}

interface AppProps {
}

class App extends PureComponent<AppProps,AppState> {

    //use to passing props in more elegant way || for class components
    static contextType = AuthContext;

    private inputElement:any;
    // private inputElementRef:any;

    constructor(props:any) {
        super(props);
        console.log('[App.js] constructor');
        // this.inputElementRef = React.createRef();
    }

    state = {
       counter:1,
       removeSectionFromReactDom:true,
       auth:false,
        propProducts: {
            products: [
                {
                    name: "chair",
                    inventory: 5,
                    unit_price: 45.99,
                    id: 1
                },
                {
                    name: "table",
                    inventory: 10,
                    unit_price: 123.75,
                    id: 2
                },
                {
                    name: "sofa",
                    inventory: 2,
                    unit_price: 399.50,
                    id: 3
                }
            ],
        }
    };

    setRemoveSectionFromReactDom = () => {
        const removeSectionFromReactDom = this.state.removeSectionFromReactDom;

        this.setState({removeSectionFromReactDom : !removeSectionFromReactDom});
    };

    static getDerivedStateFromProps(props:any, state:any) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
    //   console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
        // this.inputElementRef.focus();
        this.inputElement.focus();
    }

    // shouldComponentUpdate(nextProps:any, nextState:any) {
    //     console.log('[App.js] shouldComponentUpdate');
    //
    //     return true;
    // }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

     methodReferenceExampleCounterIncrementation = () => {
        // const setCounter = this.state.counter;
        //   this.setState({counter:setCounter+1});

         this.setState((prevState, props) => {
            return  {counter:prevState.counter + 1};
         });
    };

    loginHandler = () => {
        this.setState({auth:true});
    };

    render() {
        return (
        <Router>
            <Menu/>
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*    </p>*/}
            {/*</header>*/}
            {
                this.state.counter > 0 ?
                    <MethodReferenceExample counter={this.state.counter}
                                            click={this.methodReferenceExampleCounterIncrementation}/> : null
            }
            <>
                <SpreadOperator/>
            </>
            <>
                <RestOperator number1={1} number2={2}/>
            </>
            <>
                <ShowHideSectionConditionally/>
            </>
            <>
                <ReactStyligExample/>
            </>
            <>
                <div>
                    <button onClick={() => {
                        this.setRemoveSectionFromReactDom();
                    }}>
                        RemoveSectionFromReactDOM
                    </button>
                    <AuthContext.Provider value={{auth:this.state.auth, login:this.loginHandler}}>
                        {
                            this.state.removeSectionFromReactDom ?
                                <PropAsStateInChildComponent
                                    propProducts={this.state.propProducts}
                                /> : null
                        }
                    </AuthContext.Provider>
                </div>
            </>
            <>
                <br/>
                <br/>
                <p>Input Refs Example</p>
                <input type="text"
                 ref={(inputEl) => {this.inputElement = inputEl}}
                //     ref={this.inputElementRef}
                />
            </>
        </Router>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
//export default withWrappedComponent(App, 'fakeClass');