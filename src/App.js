import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import UserRoute from "./App/User/UserRoute";

import AboutUsContainer from "./App/Pages/AboutUs/AboutUsContainer";

import UserListContainer from "./App/User/UserList/UserListContainer";
import UserEditContainer from "./App/User/UserEdit/UserEditContainer";
import UserNewContainer from "./App/User/UserNew/UserNewContainer";
import UserDeleteContainer from "./App/User/UserDelete/UserDeleteContainer";


import HeaderContainer from './Header/HeaderContainer';
import FooterContainer from './Footer/FooterContainer';
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HeaderContainer />
                    <div className="App container">
                        <div>
                            <Switch>
                                <Route exact path="/users" component={UserListContainer} />
                                <Route exact path="/users/new" component={UserNewContainer} />
                                <Route path="/users/edit/:id" component={UserEditContainer} />
                                <Route path="/users/delete/:id" component={UserDeleteContainer} />
                                <Route path="/about-us" component={AboutUsContainer} />
                            </Switch>
                        </div>
                    </div>
                    <FooterContainer />
                </div>
            </Router>
        );
    }
}

export default App;
