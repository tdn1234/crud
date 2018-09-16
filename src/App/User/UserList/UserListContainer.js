import React, {Component} from 'react';

import UserList from './UserList';
import {API_END_POINT} from '../UserConstant';
import {API_GET} from '../../../Utilities/Services';

class UserListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           search: '',
           isLoading: true,
           users: [],
           error: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.onGetUsersSuccess = this.onGetUsersSuccess.bind(this);
        this.onGetUsersFailure = this.onGetUsersFailure.bind(this);
    }

    componentDidMount() {
        API_GET(API_END_POINT + '/', this.onGetUsersSuccess, this.onGetUsersFailure);
    }

    onGetUsersSuccess(result) {
        this.setState({isLoading: false, users: result});
    }

    onGetUsersFailure(error) {
        this.setState({isLoading: false, error: error});
    }
    

    handleClick() {
        this.props.history.push("/users/new");
    }
    handleSearchInput(event) {
        this.setState({            
            'search': event.target.value            
        });        
    }

    handleSearchSubmit() {        
        this.setState({isLoading: true});
        this.props.history.push("/users?q=" + this.state.search);
        API_GET(API_END_POINT + '?q=' + this.state.search, this.onGetUsersSuccess, this.onGetUsersFailure);       
    }

    render() {
        return (
            <div>
                <UserList 
                    buttonTitle = "Add New" 
                    isLoading = {this.state.isLoading}
                    users = {this.state.users}
                    handleClick = {this.handleClick}  
                    handleSearchInput = {this.handleSearchInput}
                    handleSearchSubmit = {this.handleSearchSubmit}          
                />
            </div>
        );
    }
}

export default UserListContainer;
