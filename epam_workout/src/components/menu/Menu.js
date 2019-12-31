import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import Home from "../../pages/Home";
import About from "../../pages/About";
import User from "../../pages/User";

export default () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to=
                              {
                                  {
                                      pathname:"/",
                                      state:{
                                          from:"root"
                                      }
                                  }
                              }
                    >Home</Link>
                </li>
                <li>
                    <Link to="/about/DobryTemat/NajwazniejszyTemat">About</Link>
                </li>
                <li>
                    <Link to="/user/Dojlon/LowcaGlow">User</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about/:aboutSubject/:mainSubject" component={About}/>
                <Route exact path="/user/:name/:surname" component={User}/>
            </Switch>
        </div>
    );
}