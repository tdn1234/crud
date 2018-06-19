import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/about-us'}>About Us</Link>
                </div>
            </div>
        );
    }
}

export default Header;
