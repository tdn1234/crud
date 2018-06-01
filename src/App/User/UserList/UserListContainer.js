import React, { Component } from 'react';

import UserList from './UserList';

import fetchUsers from './UserService';

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    var users = fetchUsers();
    console.log(users);
    this.users = [
      {id: 1, name: 'test'},
      {id: 2, name: 'test2'},
      {id: 3, name: 'test3'},
      {id: 4, name: 'test4'},
      {id: 5, name: 'test5'},
      {id: 6, name: 'test6'},
      {id: 7, name: 'test7'},
      {id: 8, name: 'test8'},
    ];
  }

  numberList(users) {    
    const listItems = users.map((item) =>
      <tr key={item.id.toString()}>
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    );
    return (
      <table>
        <tbody>
          <tr>
            <td>STT</td>
            <td>Name</td>
          </tr>        
          {listItems}
        </tbody>
      </table>
    );
  }
  
  handleClick(e) {
    console.log('click1234');
  }
  render() {
    return (
      <div>        
        <UserList
          buttonTitle = "Add New"
          handleClick = {this.handleClick}
        />
        {this.numberList(this.users)}
      </div>
    );
  }
}

export default UserListContainer;
