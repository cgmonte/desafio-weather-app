export function unitConvertKphMs(kph) {
    return Number.parseFloat(kph / 3.6).toFixed(2)
}

export function processApiData({current, forecast}) {
    try {
        
        const currentWeather = getCurrentWeather({current, forecast})

        const forecastWeather = getForecastWeather({forecast})

        const otherInfo = getOtherInfo({current, forecast})

        return { currentWeather, forecastWeather, otherInfo }

    } catch (error) {
        console.error(error)
    }
}

function getCurrentWeather({current, forecast}) {
    return {
        last_updated: current.last_updated,
        is_day: current.is_day,
        current_condition: current.condition.text,
        current_condition_code: current.condition.code,
        current_temperature: current.temp_c,
        today_min_temperature: forecast.forecastday[0].day.mintemp_c,
        today_max_temperature: forecast.forecastday[0].day.maxtemp_c,
    }
}

function getOtherInfo({current, forecast: {forecastday}}) {
    return {
        current_humidity: current.humidity,
        current_wind_speed: unitConvertKphMs(current.wind_kph),
        today_sunrise: forecastday[0].astro.sunrise,
        today_sunset: forecastday[0].astro.sunset
    }
}

function getForecastWeather({forecast}) {

    const forecastWeather = {
        dawn: {},
        morning: {},
        afternoon: {},
        night: {},
    }

    for (const hour of forecast.forecastday[0].hour) {
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

    return forecastWeather
}

function getWeatherByHour({condition: {icon, code}, is_day, temp_c}) {
    return {
        icon_url: icon,
        condition_code: code,
        is_day: is_day,
        temperature: temp_c
    }
}