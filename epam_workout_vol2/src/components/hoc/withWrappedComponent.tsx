import React from 'react';

interface withWrappedComponent {
    (WrappedComponent: any,
    className : any) : any
}

const withWrappedComponent : withWrappedComponent = (WrappedComponent, className) : any  => {

    return (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

export default withWrappedComponent;

//problerm with implemntation in type script