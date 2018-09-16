import React, {Component} from 'react';

import {NavLink} from 'react-router-dom';

import Loading from '../../../Utilities/Loading';

import {Input} from 'reactstrap';

import ReactTable from "react-table";

import "react-table/react-table.css";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = props.handleClick;
    }

    ButtonEdit(user) {
        return <NavLink to={'/users/edit/' + user.id}>{user.name}</NavLink>;
    }

    userEditUrl(cellInfo) {       
        return <NavLink to={'/users/edit/' + cellInfo.original.id}>{cellInfo.value}</NavLink>
    }

    userDeleteUrl(cellInfo) {       
        return <NavLink to={'/users/delete/' + cellInfo.value}>Delete</NavLink>
    }

    usersList(users) {       
        return (<ReactTable
            data={users}
            columns={[{
                columns: [
                    {
                        Header: "ID",
                        accessor: "id",
                        Cell: this.userEditUrl
                    }, 
                    {
                        Header: "Name",
                        accessor: "name",
                        Cell: this.userEditUrl
                    }, 
                    {
                        Header: "Email",
                        accessor: "email",
                        Cell: this.userEditUrl
                    },
                    {
                        Header: "",
                        accessor: "id",
                        Cell: this.userDeleteUrl
                    }
                ]
            }
        ]}
            defaultSorted={[{
                id: "id",
                desc: true
            }
        ]}
            defaultPageSize={10}
            className="-striped -highlight table"/>);
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
