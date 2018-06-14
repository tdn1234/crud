import React, { Component } from 'react';

import { NavLink, Redirect } from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import { Button } from 'reactstrap';

import './UserDelete.css';

import { API_URL } from '../../../AppConstant';
import { API_END_POINT } from '../UserConstant';

class UserDelete extends Component {

    constructor(props) {
        super(props);
        this.handleClick = props.handleClick;
        this.state = {
            isLoading: true,
            userId: props.userId,
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(API_URL + API_END_POINT + '/' + this.state.userId)
            .then(res => res.json())
            .then((result) => {
                this.setState({ isLoading: false, user: result });
            }, (error) => {
                this.setState({ isLoading: false, error });
            });
    }

    handleChange(event) {
        this.setState({ user: { 'name': event.target.value } });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        fetch(API_URL + API_END_POINT + '/' + this.state.userId,
            {
                method: 'delete'
            }
        ).then(res => res.json())
            .then(() => {                
                return <Redirect to='/users'  />
            }, (error) => {
                this.setState({ isLoading: false, error });
            });


    }

    deleteForm(user) {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>Are you sure want to delete user
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
        const isLoading = this.state.isLoading;
        const UserDeleteView = isLoading
            ? (<Loading />)
            : (this.deleteForm(this.state.user));
        return (
            <div className="UserDelete">
                <Button className='back-button'>
                    <NavLink to='/users'>Back</NavLink>
                </Button>
                {UserDeleteView}
            </div>
        );
    }
}

export default UserDelete;
