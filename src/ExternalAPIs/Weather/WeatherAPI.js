const axios = require('axios');

export async function WeatherApiGetData({ city, days, hour }) {
    try {
        const response = await axios.get('http://api.weatherapi.com/v1/forecast.json?', {
            params: {
                key: '465ddc12d24d4e30bbb11315212909',
                q: city,
                days: days,
                hour: hour,
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }

}