import React from 'react';
import {RouteComponentProps} from "react-router";

type RouterMatchTypeProps = {
  name: string;
  surname: string
};

function User({match}:RouteComponentProps<RouterMatchTypeProps>) {

    let stylePage = {
        backgroundColor: '#D60270',
        color:'whitesmoke',
        padding: '10px 10px 10px 10px',
        margin: '20px',
        width: '95%'
    };

    return (<div style={stylePage}>User {match.params.name} {match.params.surname}</div>);

}

export default User;