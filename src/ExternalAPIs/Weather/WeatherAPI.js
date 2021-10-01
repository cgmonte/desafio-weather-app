import * as utils from "../../lib/utils";

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

export function weatherApiProcessData({ weatherApiResponse }) {
    try {
        const currentWeather = {
            'current_condition': weatherApiResponse.data.current.condition.text,
            'current_temperature': weatherApiResponse.data.current.temp_c,
            'current_icon_url': weatherApiResponse.data.current.condition.icon,
            'today_min_temperature': weatherApiResponse.data.forecast.forecastday[0].day.mintemp_c,
            'today_max_temperature': weatherApiResponse.data.forecast.forecastday[0].day.maxtemp_c,
        }

        let forecastWeather = {}

        for (const hour of weatherApiResponse.data.forecast.forecastday[0].hour) {
            switch (hour.time.slice(11, -3)) {
                case '03':
                    forecastWeather['dawn_icon_url'] = hour.condition.icon
                    forecastWeather['dawn_temperature'] = hour.temp_c
                    break;
                case '09':
                    forecastWeather['morning_icon_url'] = hour.condition.icon
                    forecastWeather['morning_temperature'] = hour.temp_c
                    break;
                case '15':
                    forecastWeather['afternoon_icon_url'] = hour.condition.icon
                    forecastWeather['afternoon_temperature'] = hour.temp_c
                    break;
                case '21':
                    forecastWeather['night_icon_url'] = hour.condition.icon
                    forecastWeather['night_temperature'] = hour.temp_c
                    break;
                default:
                    break;
            }
        }

        const otherInfo = {
            'current_humidity': weatherApiResponse.data.current.humidity,
            'current_wind_speed': utils.unitConvertKphMs(weatherApiResponse.data.current.wind_kph),
            'today_sunrise': weatherApiResponse.data.forecast.forecastday[0].astro.sunrise,
            'today_sunset': weatherApiResponse.data.forecast.forecastday[0].astro.sunset
        }

        const weatherData = { currentWeather, forecastWeather, otherInfo }
        return weatherData;
    } catch (error) {
        console.error(error);
    }
}