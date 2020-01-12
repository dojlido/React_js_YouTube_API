import React from 'react';

interface ButtonInterface {
    //TODO DODAC WLASCIWE TYPY
    children?:any;
    clicked?:any;
    disabled?:boolean;
    btnType:any;
}



const button = (props: ButtonInterface) => {
    const cssClasses:any = {danger:'Danger', success:'Success'};

    return (
        <button
            className={['Button', cssClasses[props.btnType]].join(' ')}
            onClick={props.clicked}
            disabled={props.disabled}
        >{props.children}
        </button>
    )
};

export default button;