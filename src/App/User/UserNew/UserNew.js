import React, {Component} from 'react';

import {Button} from 'reactstrap';

import Form from 'react-validation/build/form';

import Input from 'react-validation/build/input';

import {required, email} from '../../../Utilities/Validations';

class UserNew extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick = () => {
        this
            .form
            .validateAll();
    };

    userForm() {
        return (
            <Form
                ref={c => {
                this.form = c
            }}
                onSubmit={this.props.handleSubmit}>
                <button className="button" type="button" onClick={this.handleClick}>Validate all</button>
                <div className='form-group'>
                    <label>Name:</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="name"
                        validations={[required]}
                        onChange={this.props.handleNameChange}/>
                        
                    <label>Email:</label>
                    <Input
                        type='email'
                        className='form-control'
                        name='email'
                        validations={[required, email]}
                        onChange={this.props.handleEmailChange}/>
                </div>

                <Button type="submit">Submit</Button>
            </Form>
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

UserNew.propType = {}

export default UserNew;
