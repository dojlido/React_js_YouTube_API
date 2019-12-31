import React from 'react';

interface axuliaryHighOrderComponent {
    children: any;
}

const aux = (props:axuliaryHighOrderComponent) : any => {
    return props.children;
};

export default aux;