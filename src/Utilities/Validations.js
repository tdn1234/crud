import React, { Component}  from 'react';

export const required = (value, props) => {
    if (!value || (props.isCheckable && !props.checked)) {
        return <span className="form-error is-visible">Required field</span>;
    }
};

export const email = (value) => {
    if (!isEmail(value)) {
        return <span className="form-error is-visible">{value}
            is not a valid email.</span>;
    }
};

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}