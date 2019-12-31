import React from 'react';
import {RouteComponentProps, useParams} from 'react-router-dom';

interface RouteAboutParams {
    aboutSubject: string;
    mainSubject: string;
}

function About({match}:RouteComponentProps<RouteAboutParams>) {
    let stylePage = {
        backgroundColor: 'silver',
        color:'whitesmoke',
        padding: '10px 10px 10px 10px',
        margin: '20px',
        width: '95%'
    };

    return (<div style={stylePage}>About: {match.params.aboutSubject} {match.params.mainSubject}</div>);

}

export default About;