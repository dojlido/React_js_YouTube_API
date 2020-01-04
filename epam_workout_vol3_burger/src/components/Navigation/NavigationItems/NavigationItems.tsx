import React from 'react';
import NavigationItem from '../../Navigation/NavigationItem/NavigationItem';

interface NavigationItemsInterface {
}

const navigationItems = (props:NavigationItemsInterface) => (
    <ul className={'NavigationItems'}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;