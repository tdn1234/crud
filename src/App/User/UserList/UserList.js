import React, { Component } from 'react';

class UserList extends Component {
        constructor(props) {
                super(props);        
                this.handleClick = props.handleClick;
        }
        render() {
                return (
                        <div className="UserList">

                                <button className="square" 
                                        onClick={this.handleClick}>
                                        {this.props.buttonTitle}
                                </button>
                        </div>
                );
        }
}

export default UserList;
