import React from "react";
import { weatherApiGetData, weatherApiProcessData } from "../ExternalAPIs/Weather/WeatherAPI";
import { withRouter } from 'react-router-dom';

import CurrentWeather from "./CurrentWeather";
import ForecastSection from "./ForecastSection";
import FooterInfo from "./FooterInfo";
import Navigation from "./Navigation";

import "./Global.scss";

class CityWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: this.props.location.pathname.slice(1),
            fetchingData: true,
            weatherData: {}
        }
    }

    async componentDidMount() {

        const response = await weatherApiGetData({ city: this.state.cityName, days: 1 });

        const weatherData = weatherApiProcessData({weatherApiResponse: response})

        this.setState({ weatherData: weatherData, fetchingData: false },
            function () {
                // console.log(this.state.weatherData)
            }
        )
    }

    render() {
        return (
            <div id="outer-div">
                <Navigation />
                {this.state.fetchingData ?
                    (
                        <h2> Loading data </h2>
                    ) : (

                        <div id="main-content-div">

                            <p id="city-name"> {this.state.cityName.toUpperCase()} </p>

                            <CurrentWeather data={this.state.weatherData.currentWeather} />

                            <ForecastSection data={this.state.weatherData.forecastWeather} />

                            <FooterInfo data={this.state.weatherData.otherInfo} />

                        </div>
                    )}
            </div>
        );
    }
}

export default withRouter(CityWeather);