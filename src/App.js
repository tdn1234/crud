import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import UserListContainer from "./App/User/UserList/UserListContainer";
import UserEditContainer from "./App/User/UserEdit/UserEditContainer";
import UserDeleteContainer from "./App/User/UserDelete/UserDeleteContainer";

import AboutUsContainer from "./App/Pages/AboutUs/AboutUsContainer";

import HeaderContainer from './Header/HeaderContainer';
import FooterContainer from './Footer/FooterContainer';
class App extends Component {
    render() {
        return (
            <div>
                <HeaderContainer />
                <div className="App">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to={'/users'}>Users</Link>
                                </li>
                                <li>
                                    <Link to={'/about-us'}>About Us</Link>
                                </li>
                            </ul>
                            <Switch>
                                <Route exact path="/users" component={UserListContainer} />
                                <Route path="/users/edit/:id" component={UserEditContainer} />
                                <Route path="/users/delete/:id" component={UserDeleteContainer} />
                                <Route path="/about-us" component={AboutUsContainer} />
                            </Switch>
                        </div>
                    </Router>
                </div>
                <FooterContainer />
            </div>
        );
    }
}

export default App;
