import React from "react";

import { WeatherApiGetData } from "../ExternalAPIs/Weather/WeatherAPI";

import WeatherCard from "./WeatherCard";

import { withRouter } from 'react-router-dom';

class CityWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponses: []
        }
    }

    async componentDidMount() {

        let responses = []
        for (const hour of this.props.hours) {
            const response = await WeatherApiGetData(
                {
                    city: this.props.location.pathname.slice(1),
                    days: 1,
                    hour: hour
                }
            );
            responses.push(response)
        }
        this.setState({ apiResponses: responses },
            function () {
                this.state.apiResponses.forEach(function (response) {




                    console.log(response)









                });
            })
    }

    render() {
        return (
                <WeatherCard
                    city_name={this.props.location.pathname.slice(1)}
                />
        );
    }
}

export default withRouter(CityWeather);