import React, {Component, PureComponent, lazy, Suspense} from 'react';
import LifeCycleCompForAjax from './components/LifeCycleCompForAjax';
import ReactRefs from './components/ReactRefs';
import TypeCheckingWithPropsTypes from './components/TypeCheckingWithPropsTypes';
import ButtonOne from './components/elementsOfHOC/ButtonOne';
import ReduxAndReact from './components/ReduxAndReact';
import MemoComponent from './components/HOC/Memo';
import HookExample from './components/hooks/HookExample';
import ReduxHooks from './components/hooks/ReduxHooks';
import MemoHookExample from './components/hooks/MemoHookExample';
import UseRefsAndForwardRefs from './components/refs/UseRefsAndForwardRefs';
import UseEffectHookExample from './components/hooks/UseEffectHookExample';
import JsHigherOrderFunctionsExamples from './components/jsHigherOrderFunctionsExamples/JsHigherOrderFunctionsExamples';

//react Router
import {BrowserRouter as Router} from 'react-router-dom'
import Menu from './components/menu/Menu';
//end React Router

import './App.css';

const LazyLoading = lazy(() => import('./components/LazyLoading'));

class App extends Component {
    state = {
        valForMemo: 1
    };

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({valForMemo: 1})
        // }, 3000)
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Menu/>

                    <LifeCycleCompForAjax/>
                    <hr/>
                    <ReactRefs/>
                    <hr/>
                    <TypeCheckingWithPropsTypes/>
                    <hr/>
                    <ButtonOne/>
                    <hr/>
                    <ReduxAndReact/>
                    <hr/>
                    <MemoComponent val={this.state.valForMemo}/>
                    <hr/>
                    <Suspense fallback={<div>Loading.....</div>}>
                        <LazyLoading/>
                    </Suspense>
                    <hr/>
                    <HookExample/>
                    <hr/>
                    <ReduxHooks/>
                    <hr/>
                    <MemoHookExample/>
                    <hr/>
                    <UseRefsAndForwardRefs/>
                    <hr/>
                    <UseRefsAndForwardRefs/>
                    <hr/>
                    <UseEffectHookExample/>
                    <hr/>
                    <JsHigherOrderFunctionsExamples/>
                </Router>
            </div>
        );
    }
}

export default App;
