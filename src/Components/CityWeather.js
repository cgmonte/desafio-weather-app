import React from "react";

import { WeatherApiGetData } from "../ExternalAPIs/Weather/WeatherAPI";

import WeatherCard from "./WeatherCard";

import { withRouter } from 'react-router-dom';

class CityWeather extends React.Component {
    constructor() {
        super();
        this.state = {
            apiResponses: []
        }
    }

    async componentDidMount() {
        let responses = []
        for (const hour of this.props.hours) {
            const response = await WeatherApiGetData({ city: this.props.key, days: 1, hour: hour });
            responses.push(response)
        }
        this.setState({ apiResponses: responses }, 
            function () {
            console.log(this.state.apiResponses)
        })
    }

    render() {
        return (
            <div>
                <WeatherCard apiResponses={this.state.apiResponses} />
            </div>
        );
    }
}

export default withRouter(CityWeather);