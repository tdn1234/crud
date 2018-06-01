import React, {Component} from 'react';
import {RingLoader} from 'react-spinners';

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
        fetch("http://45.32.104.55:3003/users")
            .then(res => res.json())
            .then((result) => {
                this.setState({isLoading: false, users: result});
            }, (error) => {
                this.setState({isLoading: false, error});
            })
    }

    usersList(users) {
        const listItems = users.map((item) => <tr key={item
            .id
            .toString()}>
            <td>{item.id}</td>
            <td>{item.name}</td>
        </tr>);
        return (
            <table>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                    {listItems}
                </tbody>
            </table>
        );
    }

    render() {
        const isLoading = this.state.isLoading;
        const UserListView = isLoading
            ? (<RingLoader color={'#123abc'} loading={true}/>)
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
