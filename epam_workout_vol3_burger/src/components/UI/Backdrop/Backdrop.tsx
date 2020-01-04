import React from 'react';

interface BackdropInterface {
    show:boolean;
    clicked:any;
}

const backdrop = (props:BackdropInterface) => (
        props.show ? <div
            onClick={props.clicked}
            className={'Backdrop'}
        ></div> : null
);

export default backdrop;