import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

interface ToolbarInterface {
    drawerToggleClicked:any;
}

const toolbar = (props:ToolbarInterface) => (
   <header className={'Toolbar'}>
       <DrawerToggle drawerToggleClicked={props.drawerToggleClicked} />
       <div className={'Logo'}>
           <Logo />
       </div>
       <nav className={'DesktopOnly'}>
           <NavigationItems/>
       </nav>
   </header>
);

export default toolbar;