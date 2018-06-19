import {API_URL} from '../AppConstant';

const Services = (url, method = 'GET', body = {}, onSuccess = () => {}, onFailure = () => {}) => {
    url = API_URL + url;
    var params = {
        method: method,
        header: {
            'Content-Type': 'application/json'
        }
    };

    // if (Object.keys(body).length > 0) {
    //     params['body'] = JSON.stringify(body);
    // }

    fetch(url, params)
        .then(res => res.json())
        .then((result) => {
            onSuccess(result);
        }, (error) => {
            onFailure(error);
        });
}
export default Services;