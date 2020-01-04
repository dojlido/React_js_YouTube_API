import React from 'react';

interface ButtonInterface {
    //TODO DODAC WLASCIWE TYPY
    children?:any;
    clicked:any;
    btnType:any;
}



const button = (props: ButtonInterface) => {
    const cssClasses:any = {danger:'Danger', success:'Success'};

    return (
        <button
            className={['Button', cssClasses[props.btnType]].join(' ')}
            onClick={props.clicked}
        >{props.children}
        </button>
    )
};

export default button;