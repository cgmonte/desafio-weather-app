import React from "react";

import CurrentWeather from "./CurrentWeather";

import ForecastWeather from "./ForecastWeather";

import FooterInfo from "./FooterInfo";

import "./Global.scss";

class WeatherCard extends React.Component {
    render() {
        return (
            <div id="main-content">

                <p id="city-name"> {this.props.city_name.toUpperCase()} </p>

                <CurrentWeather data={this.props.weather_data[0]} />

                <ForecastWeather data={this.props.weather_data[1]} />

                <FooterInfo data={this.props.weather_data[2]} />

            </div>
        );
    }
}

export default WeatherCard