import "./Global.scss";

function ForecastWeather(props) {
        return (
            <div className="forecast-section-div">

                <div className="forecasts-div">
                    <p className="forecast-title">dawn</p>
                    <img className="forecast-img" alt={props.data.dawn_icon_url} src={props.data.dawn_icon_url} />
                    <p className="forecast-temp-data">{props.data.dawn_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">morning</p>
                    <img className="forecast-img" alt={props.data.morning_icon_url} src={props.data.morning_icon_url} />
                    <p className="forecast-temp-data">{props.data.morning_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">afternoon</p>
                    <img className="forecast-img" alt={props.data.afternoon_icon_url} src={props.data.afternoon_icon_url} />
                    <p className="forecast-temp-data">{props.data.afternoon_temperature} C</p>
                </div>

                <div className="forecasts-div">
                    <p className="forecast-title">night</p>
                    <img className="forecast-img" alt={props.data.night_icon_url} src={props.data.night_icon_url} />
                    <p className="forecast-temp-data">{props.data.night_temperature} C</p>
                </div>

            </div>
        );
}

export default ForecastWeather