import React from 'react';

interface auxWithClassHighOrderComponent {
    props?: any;
    classes? : string;
    children :any;
}

const withClass = (props:auxWithClassHighOrderComponent) : any => {

    return  (
        <div className={props.classes}>
            {props.children}
        </div>
    );
};

export default withClass;