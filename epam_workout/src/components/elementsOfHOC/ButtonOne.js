import React, {Component, PureComponent} from 'react';
import StylesWrapper from '../HOC/stylesWrapper';

const ButtonOne = (props) => {
    return (
        <div>
            <br/>
            <br/>
            <button style={props.styles}>I'm a ButtonOne</button>
        </div>
    );
};

export default StylesWrapper(ButtonOne);