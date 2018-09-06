import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';

class UserNew extends Component {
    constructor(props) {
        super(props);
        this.props = props;     
    }

    userForm() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <Input
                        type="text"
                        className="required-entry"
                        name="name"                        
                        onChange={this.props.handleNameChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email address</label>
                    <Input
                        type='email'
                        className='form-control'
                        name='email'                        
                        onChange={this.props.handleEmailChange}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        );
    }

    render() {
        return (
            <div className="UserNew">
                {this.userForm()}
            </div>
        );
    }
}

UserNew.propType = {
    
}

export default UserNew;
