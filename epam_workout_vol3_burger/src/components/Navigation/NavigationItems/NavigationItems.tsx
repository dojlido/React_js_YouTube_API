import React from 'react';
import NavigationItem from '../../Navigation/NavigationItem/NavigationItem';

interface NavigationItemsInterface {
}

const navigationItems = (props:NavigationItemsInterface) => (
    <ul className={'NavigationItems'}>
        <NavigationItem exact link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;