import config from '../../config.json'

const axios = require('axios');

export async function weatherApiGetData({ city, days }) {
    try {
        const weatherApiResponse = await axios.get('http://api.weatherapi.com/v1/forecast.json?', {
            params: {
                key: config.weather_api_key,
                q: city,
                days: days,
            }
        });
        return weatherApiResponse;
    } catch (error) {
        console.error(error);
    }
}