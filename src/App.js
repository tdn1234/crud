import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import UserRoute from "./App/User/UserRoute";

import AboutUsContainer from "./App/Pages/AboutUs/AboutUsContainer";

import HeaderContainer from './Header/HeaderContainer';
import FooterContainer from './Footer/FooterContainer';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderContainer/>
                    <div className="App container">
                        <div>
                            <UserRoute/>
                            <Switch>
                                <Route path="/about-us" component={AboutUsContainer}/>
                            </Switch>
                        </div>                        
                    </div>
                    <FooterContainer/>
                </div>
            </Router>
        );
    }
}

export default App;
