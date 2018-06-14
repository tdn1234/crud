import React, { Component } from 'react';

import { NavLink, Redirect, Route } from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import { Button, Input } from 'reactstrap';



import './UserEdit.css';

import { API_URL } from '../../../AppConstant';
import { API_END_POINT } from '../UserConstant';

class UserEdit extends Component {

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
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: this.state.user.name })
            }
        ).then(res => res.json())
        .then((result) => {
             {/* <Route exact path="/" render={() => ( */}
                
                    // return <Redirect to="/users"/>
                    this.context.router.history.push('/users')
                
                // )}/>
        }, (error) => {
            this.setState({ isLoading: false, error });
        });


    }

    userForm(user) {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                       <Input type="text" className="required-entry" name="name" value={user.name} onChange={this.handleChange} />
                </label>
                <Button type="submit">Submit</Button>
            </form>
        );
    }

    render() {
        const isLoading = this.state.isLoading;
        const UserEditView = isLoading
            ? (<Loading />)
            : (this.userForm(this.state.user));
        return (
            <div className="UserEdit">
                <Button className='back-button'>
                    <NavLink to='/users'>Back</NavLink>
                </Button>
                {UserEditView}
            </div>
        );
    }
}

export default UserEdit;
