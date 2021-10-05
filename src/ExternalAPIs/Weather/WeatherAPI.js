import { unitConvertKphMs } from "../../lib/utils";

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

function getWeatherByHour({condition: {icon, code}, is_day, temp_c}) {
    return {
        icon_url: icon,
        condition_code: code,
        is_day: is_day,
        temperature: temp_c
    }
}

export function weatherApiProcessData({ data }) {
    try {
        const currentWeather = {
            'last_updated': data.current.last_updated,
            'is_day': data.current.is_day,
            'current_condition': data.current.condition.text,
            'current_condition_code': data.current.condition.code,
            'current_temperature': data.current.temp_c,
            'today_min_temperature': data.forecast.forecastday[0].day.mintemp_c,
            'today_max_temperature': data.forecast.forecastday[0].day.maxtemp_c,
        }
        const forecastWeather = {
            dawn: {},
            morning: {},
            afternoon: {},
            night: {},
        }
        for (const hour of data.forecast.forecastday[0].hour) {
            switch (hour.time.slice(11, -3)) {
                case '03':
                    forecastWeather.dawn = getWeatherByHour(hour)
                    break;
                case '09':
                    forecastWeather.morning = getWeatherByHour(hour)
                    break;
                case '15':
                    forecastWeather.afternoon = getWeatherByHour(hour)
                    break;
                case '21':
                    forecastWeather.night = getWeatherByHour(hour)
                    break;
                default:
                    break;
            }
        }
        const otherInfo = {
            'current_humidity': data.current.humidity,
            'current_wind_speed': unitConvertKphMs(data.current.wind_kph),
            'today_sunrise': data.forecast.forecastday[0].astro.sunrise,
            'today_sunset': data.forecast.forecastday[0].astro.sunset
        }
        return { currentWeather, forecastWeather, otherInfo }
    } catch (error) {
        console.error(error)
    }
}