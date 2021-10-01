import React from "react";

import "./Global.scss";

class ForecastWeather extends React.Component {
    render() {
        return (
            <div className="forecast-section-div">

                <div className="forecasts-div">
                    <p className="forecast-title">dawn</p>
                    <img className="forecast-img" alt={this.props.data.dawn_icon_url} src={this.props.data.dawn_icon_url} />
                    <p className="forecast-temp-data">{this.props.data.dawn_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">morning</p>
                    <img className="forecast-img" alt={this.props.data.morning_icon_url} src={this.props.data.morning_icon_url} />
                    <p className="forecast-temp-data">{this.props.data.morning_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">afternoon</p>
                    <img className="forecast-img" alt={this.props.data.afternoon_icon_url} src={this.props.data.afternoon_icon_url} />
                    <p className="forecast-temp-data">{this.props.data.afternoon_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">night</p>
                    <img className="forecast-img" alt={this.props.data.night_icon_url} src={this.props.data.night_icon_url} />
                    <p className="forecast-temp-data">{this.props.data.night_temperature} C</p>
                </div>

            </div>
        );
    }
}

export default ForecastWeather