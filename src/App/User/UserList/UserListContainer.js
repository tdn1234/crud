import React, {Component} from 'react';

import UserList from './UserList';

class UserListContainer extends Component {
    handleClick(e) {
        console.log('click1234');
    }
    render() {
        return (
            <div>
                <UserList 
                    buttonTitle = "Add New123" 
                    handleClick = {this.handleClick}                    
                />
            </div>
        );
    }
}

export default UserListContainer;
