import React, {Component} from 'react';

import UserEdit from './UserEdit';

class UserEditContainer extends Component {
    handleClick(e) {
        console.log('click1234');
    }
    render() {
        return (
            <div>
                <UserEdit 
                    buttonTitle = "Add New123 edit" 
                    handleClick = {this.handleClick}
                    userId = {this.props.match.params.id}                 
                />
            </div>
        );
    }
}

export default UserEditContainer;
