import React, {Component} from 'react';

import UserDelete from './UserDelete';

class UserDeleteContainer extends Component {
    handleClick(e) {
        console.log('click1234');
    }
    render() {
        return (
            <div>
                <UserDelete 
                    buttonTitle = "Add New123 edit" 
                    handleClick = {this.handleClick}
                    userId = {this.props.match.params.id}                 
                />
            </div>
        );
    }
}

export default UserDeleteContainer;
