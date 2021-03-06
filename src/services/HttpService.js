import Axios from 'axios';

const axios = Axios.create({});

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'https://us-central1-better-roi.cloudfunctions.net/job-search';

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data);
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data);
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data);
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data);
    },
};

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: BASE_URL + endpoint,
            method,
            data,
        });
        return res.data;
    } catch (err) {
        console.log(err, 'HTTP REQUEST IS NOT VALID');
    }
}
