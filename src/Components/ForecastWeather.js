import "./Global.scss";

import Icon from "./Icon";

function ForecastWeather(props) {

    return (

        <div className="forecasts-div">
            <p className="forecast-title">{props.name}</p>
            <Icon small isDay={props.data.is_day} conditionCode={props.data.condition_code} />
            <p className="forecast-data">{Math.trunc(props.data.temperature)} &deg;C</p>
        </div>

    );
}

export default ForecastWeather