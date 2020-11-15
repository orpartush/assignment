import HttpService from './HttpService.js';

export const JobService = {
    query,
};

function query() {
    const reqBody = {
        q: 'cashier',
        size: 20,
        r: 35,
        geo: 'us',
        lat: '33.9526',
        long: '-84.54993',
        formatted_address: 'Marietta, Georgia, United States',
        botName: 'jobs-bear',
        page: 1,
    };
    return HttpService.post('/', reqBody);
}
