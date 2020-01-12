import React from 'react';
import {NavLink} from 'react-router-dom';

interface NavigationItemInterface {
    link:string;
    children:any;
    exact?:any;
}

const navigationItem = (props:NavigationItemInterface) => (
        <li className={'NavigationItem'}>
            <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={'active'}
            >{props.children}</NavLink>
        </li>
);

export default navigationItem;