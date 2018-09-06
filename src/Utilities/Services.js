import {API_URL} from '../AppConstant';

export const API_GET = (url, onSuccess = () => {}, onFailure = () => {}) => {
    url = API_URL + url;
    var params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetData(url, params, onSuccess, onFailure);
}

export const API_PUT = (url, body = {}, onSuccess = () => {}, onFailure = () => {}) => {
    url = API_URL + url;
    var params = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    fetData(url, params, onSuccess, onFailure);
}

export const API_POST = (url, body = {}, onSuccess = () => {}, onFailure = () => {}) => {
    url = API_URL + url;
    var params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    fetData(url, params, onSuccess, onFailure);
}

export const API_DELETE = (url, onSuccess = () => {}, onFailure = () => {}) => {
    url = API_URL + url;
    var params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetData(url, params, onSuccess, onFailure);
}

function fetData(url, params, onSuccess, onFailure) {
    console.log(params);
    fetch(url, params)
        .then(res => res.json())
        .then((result) => {
            onSuccess(result);
        }, (error) => {
            onFailure(error);
        });
}