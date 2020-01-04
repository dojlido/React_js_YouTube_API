import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";


interface LogoInterface {
}

const logo = (props:LogoInterface) => (
        <img src={burgerLogo} alt="MyBurger" ></img>
);

export default logo;