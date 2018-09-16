import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


import { Button } from 'reactstrap';

import './UserDelete.css';

class UserDelete extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            isLoading: true,
            user: props.user,
            error: null
        };
        this.deleteForm = this.deleteForm.bind(this)   ;
    }    

    deleteForm(user) {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>Are you sure want to delete user &nbsp;
                    <NavLink to={'/users/edit/' + user.id}>{user.name}</NavLink>?
                </div>
                <Button type="submit">Yes</Button>
                <Button className='back-button'>
                    <NavLink to='/users'>No</NavLink>
                </Button>
            </form>
        );
    }

    render() {
        
        return (
            <div className="UserDelete">
                <Button className='back-button'>
                    <NavLink to='/users'>Back</NavLink>
                </Button>
                {this.deleteForm(this.state.user)}
            </div>
        );
    }
}

export default UserDelete;
