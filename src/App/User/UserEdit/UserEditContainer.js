import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import {Button} from 'reactstrap';

import './UserEdit.css';

import {API_END_POINT} from '../UserConstant';
import {API_GET, API_PUT} from '../../../Utilities/Services';
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
        this.setState({isLoading: false, user: result});
    }

    onFailure(error) {
        this.setState({isLoading: false, error: error});
    }

    componentDidMount() {
        API_GET(API_END_POINT + '/' + this.state.userId, this.onSuccess, this.onFailure);
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

        API_PUT(API_END_POINT + '/' + this.state.userId, 
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
        const UserEditView = isLoading
            ? (<Loading/>)
            : (<UserEdit
                handleSubmit={this.handleSubmit}
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                user={this.state.user}/>);
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
