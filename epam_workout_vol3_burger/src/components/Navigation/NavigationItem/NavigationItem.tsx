import React from 'react';

interface NavigationItemInterface {
    link:string;
    children:any;
    active?:boolean;
}

const navigationItem = (props:NavigationItemInterface) => (
        <li className={'NavigationItem'}>
            <a
            href={props.link}
            className={props.active ? 'active' : ''}>{props.children}</a>
        </li>
);

export default navigationItem;