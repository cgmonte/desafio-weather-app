import React from "react";

import "./Global.scss";

class CurrentWeather extends React.Component {
    render() {
        return (
            <div>

                <p className="curren-condition-title">{this.props.data.current_condition}</p>


                <div id="current-weather-info-div">

                    <div id="current-temp-div">
                        <p id="current-temp-data">{this.props.data.current_temperature}</p>
                    </div>


                    <div id="current-temp-side-div">

                        <p id="curret-temp-unit">C</p>
                        <p className="current-min-max-data">{this.props.data.today_min_temperature}</p>
                        <p className="current-min-max-data">{this.props.data.today_max_temperature}</p>

                    </div>


                    <div id="curret-weather-img-div">
                        <img alt={this.props.data.current_condition} src={this.props.data.current_icon_url} />
                    </div>

                </div>

            </div>
        );
    }
}

export default CurrentWeather