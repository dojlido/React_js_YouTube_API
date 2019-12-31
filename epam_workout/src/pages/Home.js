import React, {Fragment} from 'react';
import {useLocation, useHistory} from 'react-router-dom';

function Home() {
    const location = useLocation();
    const history = useHistory();

    let stylePage = {
        backgroundColor: 'goldenrod',
        color:'whitesmoke',
        padding: '10px 10px 10px 10px',
        margin: '20px',
        width: '95%'
    };

    function historyGoBackHandle() {
        history.goBack();
    }

    const locationStateFrom =
        location.state !== undefined
            ? location.state.from
            : " ";

    return (
       <Fragment>
        <div style={stylePage}>Home :
            <div style={stylePage}>Location = {location.pathname}</div>
            <div style={stylePage}>From = {locationStateFrom}</div>
            <button onClick={historyGoBackHandle}>Go Back!</button>
        </div>
       </Fragment>
    );

}

export default Home;