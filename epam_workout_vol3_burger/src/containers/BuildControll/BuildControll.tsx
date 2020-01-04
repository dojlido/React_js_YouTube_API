import React from 'react';

interface buildControll {
    ingredientLabel: string;
    ingredientAdded: any;
    ingredientRemove: any;
    disabled:any;
}

const buildControll = (props: buildControll): null | any  => (
    <div className={'BuildControl'}>
        <div className={'Label'}>{props.ingredientLabel}</div>
        <button
            className={'Less'}
            onClick={props.ingredientRemove}
            disabled={props.disabled}
        >
                Less
        </button>
        <button
            className={'More'}
            onClick={props.ingredientAdded}
        >
                More
        </button>
    </div>
);

export default buildControll;