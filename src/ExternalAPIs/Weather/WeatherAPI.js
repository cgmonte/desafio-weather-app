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
            'last_updated': weatherApiResponse.data.current.last_updated,
            'is_day': weatherApiResponse.data.current.is_day,
            'current_condition': weatherApiResponse.data.current.condition.text,
            'current_condition_code': weatherApiResponse.data.current.condition.code,
            'current_temperature': weatherApiResponse.data.current.temp_c,
            'today_min_temperature': weatherApiResponse.data.forecast.forecastday[0].day.mintemp_c,
            'today_max_temperature': weatherApiResponse.data.forecast.forecastday[0].day.maxtemp_c,
        }

        let forecastWeather = {
            dawn: {},
            morning: {},
            afternoon: {},
            night: {},
        }

        for (const hour of weatherApiResponse.data.forecast.forecastday[0].hour) {
            switch (hour.time.slice(11, -3)) {
                case '03':
                    forecastWeather.dawn['icon_url'] = hour.condition.icon
                    forecastWeather.dawn['condition_code'] = hour.condition.code
                    forecastWeather.dawn['is_day'] = hour.is_day
                    forecastWeather.dawn['temperature'] = hour.temp_c
                    break;
                case '09':
                    forecastWeather.morning['icon_url'] = hour.condition.icon
                    forecastWeather.morning['condition_code'] = hour.condition.code
                    forecastWeather.morning['is_day'] = hour.is_day
                    forecastWeather.morning['temperature'] = hour.temp_c
                    break;
                case '15':
                    forecastWeather.afternoon['icon_url'] = hour.condition.icon
                    forecastWeather.afternoon['condition_code'] = hour.condition.code
                    forecastWeather.afternoon['is_day'] = hour.is_day                    
                    forecastWeather.afternoon['temperature'] = hour.temp_c
                    break;
                case '21':
                    forecastWeather.night['icon_url'] = hour.condition.icon
                    forecastWeather.night['condition_code'] = hour.condition.code
                    forecastWeather.night['is_day'] = hour.is_day     
                    forecastWeather.night['temperature'] = hour.temp_c
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