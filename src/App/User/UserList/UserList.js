import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import {Input} from 'reactstrap';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = props.handleClick;
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
                <NavLink to={'/users/edit/' + item.id}>{item.email}</NavLink>
            </td>
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
                        <th>Email</th>
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
        const isLoading = this.props.isLoading;
        const UserListView = isLoading
            ? (<Loading/>)
            : (this.usersList(this.props.users));
        return (
            <div className="UserList">
                <button className="square" onClick={this.handleClick}>
                    {this.props.buttonTitle}
                </button>
                
                <Input
                    type='text'
                    className='form-control'
                    name='search'
                    onChange={this.props.handleSearchInput}/>
                <button className="square" onClick={this.props.handleSearchSubmit}>
                    Search
                </button>
                {UserListView}
            </div>
        );
    }
}

export default UserList;
