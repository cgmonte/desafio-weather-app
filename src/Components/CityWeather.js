import React from "react";

import { WeatherApiGetData } from "../ExternalAPIs/Weather/WeatherAPI";

import { withRouter } from 'react-router-dom';

import WeatherCard from "./WeatherCard";

import Navigation from "./Navigation";

import "./Global.scss";

import * as utils from "../lib/utils";

class CityWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city_name: this.props.location.pathname.slice(1),
            weather_data: [],
            fetching_data: true
        }
    }

    async componentDidMount() {

        let responses = []
        for (const hour of this.props.hours) {
            const response = await WeatherApiGetData(
                {
                    city: this.state.city_name,
                    days: 1,
                    hour: hour
                }
            );
            responses.push(response)
        }

        let current_weather = {}
        let forecast_weather = {}
        let other_info = {}

        for (let i = 0; i < responses.length; i++) {

            if (i === 0) {
                current_weather = {
                    'current_condition': responses[i].data.current.condition.text,
                    'current_temperature': responses[i].data.current.temp_c,
                    'current_icon_url': responses[i].data.current.condition.icon,
                    'today_min_temperature': responses[i].data.forecast.forecastday[0].day.mintemp_c,
                    'today_max_temperature': responses[i].data.forecast.forecastday[0].day.maxtemp_c,
                }
                other_info = {
                    'current_humidity': responses[i].data.current.humidity,
                    'current_wind_speed': utils.unitConvertKphMs(responses[i].data.current.wind_kph),
                    'today_sunrise': responses[i].data.forecast.forecastday[0].astro.sunrise,
                    'today_sunset': responses[i].data.forecast.forecastday[0].astro.sunset
                }
            }

            switch (responses[i].data.forecast.forecastday[0].hour[0].time.slice(11, -3)) {
                case '03':
                    // forecast['dawn_condition'] = responses[i].data.forecast.forecastday[0].hour[0].condition.text
                    forecast_weather['dawn_icon_url'] = responses[i].data.forecast.forecastday[0].hour[0].condition.icon
                    forecast_weather['dawn_temperature'] = responses[i].data.forecast.forecastday[0].hour[0].temp_c
                    break;
                case '09':
                    // forecast_weather['morning_condition'] = responses[i].data.forecast.forecastday[0].hour[0].condition.text
                    forecast_weather['morning_icon_url'] = responses[i].data.forecast.forecastday[0].hour[0].condition.icon
                    forecast_weather['morning_temperature'] = responses[i].data.forecast.forecastday[0].hour[0].temp_c
                    break;
                case '15':
                    // forecast_weather['afternoon_condition'] = responses[i].data.forecast.forecastday[0].hour[0].condition.text
                    forecast_weather['afternoon_icon_url'] = responses[i].data.forecast.forecastday[0].hour[0].condition.icon
                    forecast_weather['afternoon_temperature'] = responses[i].data.forecast.forecastday[0].hour[0].temp_c
                    break;
                case '21':
                    // forecast_weather['night_condition'] = responses[i].data.forecast.forecastday[0].hour[0].condition.text
                    forecast_weather['night_icon_url'] = responses[i].data.forecast.forecastday[0].hour[0].condition.icon
                    forecast_weather['night_temperature'] = responses[i].data.forecast.forecastday[0].hour[0].temp_c
                    break;
                default:
                    break;
            }
        }

        this.setState({ weather_data: [current_weather, forecast_weather, other_info], fetching_data: false },
            // function () {
            //     console.log(this.state.weather_data)
            // }
        )
    }

    render() {
        return (
            <div id="outer-div">
                <Navigation />
                {this.state.fetching_data ?
                    (
                        <h2> Loading data </h2>
                    ) : (
                        <WeatherCard
                            city_name={this.state.city_name}
                            weather_data={this.state.weather_data}
                        />
                    )}
            </div>
        );
    }
}

export default withRouter(CityWeather);