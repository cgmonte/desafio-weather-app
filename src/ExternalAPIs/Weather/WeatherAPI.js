const axios = require('axios');

export async function weatherApiGetData({ city, days }) {
    try {
        const weatherApiResponse = await axios.get('http://api.weatherapi.com/v1/forecast.json?', {
            params: {
                key: '465ddc12d24d4e30bbb11315212909',
                q: city,
                days: days,
            }
        });
        return weatherApiResponse;
    } catch (error) {
        console.error(error);
    }
}