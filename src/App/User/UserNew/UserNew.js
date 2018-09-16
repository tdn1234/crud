import React, {Component} from 'react';

import {Button} from 'reactstrap';

import Form from 'react-validation/build/form';

import Input from 'react-validation/build/input';
// import validator from 'react-validation'; import {isEmail} from 'validator';

const required = (value, props) => {
    if (!value || (props.isCheckable && !props.checked)) {
        return <span className="form-error is-visible">Required</span>;
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return <span className="form-error is-visible">{value}
            is not a valid email.</span>;
    }
};

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
                        className="required-entry"
                        name="name"
                        validations={[required]}
                        onChange={this.props.handleNameChange}/>

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
