import "./Global.scss";

import Icon from "./Icon";

function ForecastWeather({name, data: {is_day, condition_code, temperature}}) {

    return (

        <div className="forecasts-div">
            <p className="forecast-title">{name}</p>
            <Icon small isDay={is_day} conditionCode={condition_code} />
            <p className="forecast-data">{Math.trunc(temperature)} &deg;C</p>
        </div>

    );
}

export default ForecastWeather