import React from 'react';

interface DrawerToggle {
    drawerToggleClicked:any; // todo change to properly type
}

const drawerToggle = (props:DrawerToggle) => (
    <div className={'DrawerToggle'} onClick={props.drawerToggleClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;