import "./Global.scss";

import { IconContext } from "react-icons";

import { getIcon } from "../lib/utils";

function ForecastWeather(props) {
    
    const ForecastIcon = getIcon({
        isDay: props.data.is_day,
        conditionCode: props.data.condition_code
    })

    return (
        <div className="forecast-section-div">

            <div className="forecasts-div">
                <p className="forecast-title">{props.name}</p>
                <IconContext.Provider value={{ size: "5em", color: "black", className: "global-class-name" }}>
                    <ForecastIcon />
                </IconContext.Provider>
                <p className="forecast-temp-data">{props.data.temperature} C</p>
            </div>

        </div>
    );
}

export default ForecastWeather