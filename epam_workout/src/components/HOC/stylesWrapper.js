import React from 'react';
import CommonStyles from '../styles/commonStyles';

const translateProps = (props) => {
    let _styles = {...CommonStyles.default};
    if(props.disable)
    {
        _styles = {..._styles, ...CommonStyles.disable};
    }
    const newStylesProps = {...props, styles:_styles};
    return newStylesProps;
};

export default (WrappedComponent) => {
    return function wrappedStyles(args) {
        return WrappedComponent(translateProps(args));
    }
}
