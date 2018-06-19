import React, { Component } from 'react';

import { NavLink, Redirect, Route } from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import { Button, Input } from 'reactstrap';

import './UserEdit.css';

import { API_END_POINT } from '../UserConstant';
import Services from '../../../Utilities/Services';
import UserEdit from './UserEdit';

class UserEditContainer extends Component {

    constructor(props) {
        super(props);        
        this.handleClick = props.handleClick;
        this.state = {
            isLoading: true,
            userId: props.match.params.id,
            user: {},
            error: null
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccess(result) {
        this.setState({ isLoading: false, user: result });
    }

    onFailure(error) {
        this.setState({ isLoading: false, error });        
    }

    componentDidMount() {
        Services(
            API_END_POINT + '/' + this.state.userId,
            'GET',
            {},
            this.onSuccess,
            this.onFailure
        );
    }

    handleNameChange(event) {                
        this.setState({user: {...this.state.user, 'name': event.target.value}});          
    }

    handleEmailChange(event) {                
        this.setState({user: {...this.state.user, 'email': event.target.value}});                
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });

        // Services(
        //     API_END_POINT + '/' + this.state.userId,
        //     'put',
        //     {name: this.state.user.name, email: this.state.user.email}          
        // );

        fetch('http://45.32.104.55:3003/users/4',
            {
                body: JSON.stringify({ name: this.state.user.name, email: this.state.user.email }),
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                }
               
            }
        ).then(res => res.json())
        .then((result) => {
            console.log(result);
        }, (error) => {
            this.setState({ isLoading: false, error });
        });


    }



    render() {
        const isLoading = this.state.isLoading;
        const UserEditView = isLoading
            ? (<Loading />)
            : (
                <UserEdit
                    handleSubmit={this.handleSubmit}
                    handleNameChange={this.handleNameChange}
                    handleEmailChange={this.handleEmailChange}
                    user={this.state.user}
                />
            );
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

export default UserEditContainer;
