import "./Global.scss";

import { IconContext } from "react-icons";

import { getIcon } from "../lib/utils";

function ForecastWeather(props) {
    
    const ForecastIcon = getIcon({
        isDay: props.data.is_day,
        conditionCode: props.data.condition_code
    })

    return (

            <div className="forecasts-div">
                <p className="forecast-title">{props.name}</p>
                <IconContext.Provider value={{ 
                    size: "3.5em", 
                    className: "small-icon" }}>
                    <ForecastIcon />
                </IconContext.Provider>
                <p className="forecast-data">{props.data.temperature} &deg;C</p>
            </div>

    );
}

export default ForecastWeather