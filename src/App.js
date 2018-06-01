import React, { Component } from 'react';

import './App.css';

import UserListContainer from "./App/User/UserList/UserListContainer";
import HeaderContainer from './Header/HeaderContainer';
import FooterContainer from './Footer/FooterContainer';
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <HeaderContainer />
          <UserListContainer />        
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default App;
