import React from 'react';
import {useParams} from 'react-router-dom';

function About() {
    const {aboutSubject, mainSubject} = useParams();
    let stylePage = {
        backgroundColor: 'silver',
        color:'whitesmoke',
        padding: '10px 10px 10px 10px',
        margin: '20px',
        width: '95%'
    };

    return (<div style={stylePage}>About: {aboutSubject} {mainSubject}</div>);

}

export default About;