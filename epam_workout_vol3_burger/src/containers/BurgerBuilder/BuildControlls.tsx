import React from 'react';
import BuildControll from '../BuildControll/BuildControll'

interface controlsInterface {
    key?:string;
    ingredientLabel?: string;
    ingredientAdded: any;
    ingredientRemove: any;
    disabled:any;
    price:number;
    purchaseable:boolean;
    ordered:any; //todo define event | mouseEvent | htmlButtonElement
}

///TODO ENUM INTERFACE EXAMPLE
interface EnumServiceGetOrderBy {
    [index: number]: { label: string; type: string; };
}

const controls  = [
    {label: 'Salad', type: 'salad'} ,
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControlls = (props: controlsInterface): null | any  => (
    <div className={'BuildControls'}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
            <BuildControll
                key={ctrl.label as string}
                ingredientLabel={ctrl.label as string}
                ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                ingredientRemove={() => props.ingredientRemove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={'OrderButton'}
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

export default buildControlls;