import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import {API_URL} from '../../../AppConstant';
import {API_END_POINT} from '../UserConstant';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = props.handleClick;
        this.state = {
            isLoading: true,
            users: [],
            error: null
        };
    }

    componentDidMount() {
        fetch(API_URL + API_END_POINT)
            .then(res => res.json())
            .then((result) => {
                this.setState({isLoading: false, users: result});
            }, (error) => {
                this.setState({isLoading: false, error});
            })
    }

    ButtonEdit(user) {
        return <NavLink to={'/users/edit/' + user.id}>{user.name}</NavLink>;
    }

    usersList(users) {
        const listItems = users.map((item) => <tr key={item
            .id
            .toString()}>
            <td>
                <NavLink to={'/users/edit/' + item.id}>{item.id}</NavLink>
            </td>
            <td>{this.ButtonEdit(item)}</td>
            <td>
                <NavLink to={'/users/delete/' + item.id}>Delete</NavLink>
            </td>
        </tr>);
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        );
    }

    render() {
        const isLoading = this.state.isLoading;
        const UserListView = isLoading
            ? (<Loading/>)
            : (this.usersList(this.state.users));
        return (
            <div className="UserList">
                <button className="square" onClick={this.handleClick}>
                    {this.props.buttonTitle}
                </button>
                {UserListView}
            </div>
        );
    }
}

export default UserList;
