import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import {Button} from 'reactstrap';

import './UserNew.css';

import {API_END_POINT} from '../UserConstant';
import {API_POST} from '../../../Utilities/Services';
import UserNew from './UserNew';

class UserNewContainer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = props.handleClick;
        this.state = {
            isLoading: false,           
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
        this.setState({isLoading: false, user: result});
    }

    onFailure(error) {
        this.setState({isLoading: false, error});
    }

    handleNameChange(event) {
        this.setState({
            user: {
                ...this.state.user,
                'name': event.target.value
            }
        });
    }

    handleEmailChange(event) {
        this.setState({
            user: {
                ...this.state.user,
                'email': event.target.value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({isLoading: true});

        API_POST(API_END_POINT + '/', 
            {
                name: this.state.user.name,
                email: this.state.user.email
            },
            this.handleOnSubmitSuccess()
        );
    }

    handleOnSubmitSuccess() {
        this.props.history.push("/users");
    }

    render() {
        const isLoading = this.state.isLoading;
        const UserNewView = isLoading
            ? (<Loading/>)
            : (<UserNew
                handleSubmit={this.handleSubmit}
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                />);
        return (
            <div className="UserNew">
                <Button className='back-button'>
                    <NavLink to='/users'>Back</NavLink>
                </Button>
                {UserNewView}
            </div>
        );
    }
}

export default UserNewContainer;
