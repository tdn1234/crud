import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import UserListContainer from "./UserList/UserListContainer";
import UserEditContainer from "./UserEdit/UserEditContainer";
import UserNewContainer from "./UserNew/UserNewContainer";
import UserDeleteContainer from "./UserDelete/UserDeleteContainer";

class UserRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/users" component={UserListContainer}/>
                <Route exact path="/users/new" component={UserNewContainer}/>
                <Route path="/users/edit/:id" component={UserEditContainer}/>
                <Route path="/users/delete/:id" component={UserDeleteContainer}/>
            </Switch>
        );
    }
}

export default UserRoute;
