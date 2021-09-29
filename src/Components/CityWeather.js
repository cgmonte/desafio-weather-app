import React from "react";

import { WeatherApiGetData } from "../ExternalAPIs/Weather/WeatherAPI";

import WeatherCard from "./WeatherCard";

import { withRouter } from 'react-router-dom';

class CityWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city_name: this.props.location.pathname.slice(1),
            apiResponses: []
        }
    }

    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
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
        this.setState({ apiResponses: responses },
            function () {
                // console.log(this.state.apiResponses)
                for (let i = 0; i < this.state.apiResponses.length; i++) {

                    if (i === 0) {
                        console.log(this.state.city_name.toUpperCase())
                        console.log('current condition:', this.state.apiResponses[i].data.current.condition.text)
                        console.log('current temperature:', this.state.apiResponses[i].data.current.temp_c)
                        console.log('current humidity (%):', this.state.apiResponses[i].data.current.humidity)
                        console.log('current wind speed (m/s):', Number.parseFloat((this.state.apiResponses[i].data.current.wind_kph/3.6)).toFixed(2))
                        console.log('today min temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].day.mintemp_c)
                        console.log('today max temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].day.maxtemp_c)
                        console.log('today sunrise:', this.state.apiResponses[i].data.forecast.forecastday[0].astro.sunrise)
                        console.log('today sunset:', this.state.apiResponses[i].data.forecast.forecastday[0].astro.sunset)
                        
                    }

                    switch (this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].time.slice(11, -3)) {
                        case '03':
                            console.log('dawn condition:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].condition.text)
                            console.log('dawn temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].temp_c)
                            break;
                        case '09':
                            console.log('morning condition:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].condition.text)
                            console.log('morning temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].temp_c)
                            break;
                        case '15':
                            console.log('afternoon condition:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].condition.text)
                            console.log('dawn temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].temp_c)
                            break;
                        case '21':
                            console.log('night condition:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].condition.text)
                            console.log('night temperature:', this.state.apiResponses[i].data.forecast.forecastday[0].hour[0].temp_c)
                            break;
                        default:
                            break;
                    }
                }
            })
    }

    render() {
        return (
            <WeatherCard
                city_name={this.state.city_name}
            />
        );
    }
}

export default withRouter(CityWeather);