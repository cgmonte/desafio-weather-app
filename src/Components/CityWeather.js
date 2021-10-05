import React from "react";
import { weatherApiGetData } from "../ExternalAPIs/Weather/WeatherAPI";
import { processApiData, getBackGroundColor } from "../lib/utils";


import { withRouter } from 'react-router-dom';

import CurrentWeather from "./CurrentWeather";
import ForecastSection from "./ForecastSection";
import FooterInfo from "./FooterInfo";
import Navigation from "./Navigation";
import { CgSpinner } from 'react-icons/cg';

import { IconContext } from "react-icons"


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

        const weatherData = processApiData(response.data)

        this.setState({ weatherData: weatherData, fetchingData: false })
        }

    render() {
        return (
            <div id="outer-div"
                style={
                    this.state.fetchingData ?
                        {
                            "backgroundColor": "pink"
                        } : {
                            "background": getBackGroundColor(this.state.weatherData.currentWeather)
                        }
                }
            >
                <Navigation />
                {
                    this.state.fetchingData ?
                        (
                            <div id="outer-spinner-div">
                                <IconContext.Provider value={{
                                    size: "4em",
                                    className: "spinner-icon"
                                }}>
                                    <CgSpinner />
                                </IconContext.Provider>
                            </div>
                        ) : (

                            <div className="main-content-div">

                                <p className="main-title-name"> {this.state.cityName.toUpperCase()} </p>

                                <CurrentWeather data={this.state.weatherData.currentWeather} />

                                <ForecastSection data={this.state.weatherData.forecastWeather} />

                                <FooterInfo data={this.state.weatherData.otherInfo} />

                            </div>
                        )
                }
            </div >
        );
    }
}

export default withRouter(CityWeather);