import React, {Component} from 'react';

import UserDelete from './UserDelete';
import Loading from '../../../Utilities/Loading';

import { API_END_POINT } from '../UserConstant';
import {API_GET, API_DELETE} from '../../../Utilities/Services';

class UserDeleteContainer extends Component {
    constructor(props) {
        super(props);      
        this.state = {
            isLoading: true,
            userId: props.match.params.id,
            error: null
        };      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.handleOnSubmitSuccess = this.handleOnSubmitSuccess.bind(this);
    }


    onSuccess(result) {
        this.setState({isLoading: false, user: result});
    }

    onFailure(error) {
        this.setState({isLoading: false, error});
    }

    componentDidMount() {
        API_GET(API_END_POINT + '/' + this.state.userId, this.onSuccess, this.onFailure);
    }

    handleChange(event) {
        this.setState({ user: { 'name': event.target.value } });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ isLoading: true });
        API_DELETE(API_END_POINT + '/' + this.state.userId, this.handleOnSubmitSuccess());
    }

    handleOnSubmitSuccess() {        
        this.props.history.push("/users");
    }

    render() {
        const isLoading = this.state.isLoading;
        const UserDeleteView = isLoading
            ? (<Loading />)
            : (
                <UserDelete                    
                    handleSubmit = {this.handleSubmit}
                    user = {this.state.user}                                       
                />
            );
        return (
            <div>
                {UserDeleteView}
            </div>
        );
    }
}

export default UserDeleteContainer;
