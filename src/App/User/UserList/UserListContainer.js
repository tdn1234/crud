import React, {Component} from 'react';

import UserList from './UserList';

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push("/users/new");
    }
    render() {
        return (
            <div>
                <UserList 
                    buttonTitle = "Add New" 
                    handleClick = {this.handleClick}                
                />
            </div>
        );
    }
}

export default UserListContainer;
