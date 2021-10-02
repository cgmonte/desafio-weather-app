import "./Global.scss";

import { IconContext } from "react-icons";

import { getIcon } from "../lib/utils";

function CurrentWeather(props) {

    const MainIcon = getIcon({
        isDay: props.data.is_day,
        conditionCode: props.data.current_condition_code
    })

    return (
        <div>

            <p className="curren-condition-title">{props.data.current_condition.toLowerCase()}</p>


            <div id="current-weather-info-div">

                <div id="current-temp-div">
                    <p id="current-temp-data">{props.data.current_temperature}</p>
                </div>


                <div id="current-temp-side-div">

                    <p id="curret-temp-unit">C</p>
                    <p className="current-min-max-data">{props.data.today_min_temperature}</p>
                    <p className="current-min-max-data">{props.data.today_max_temperature}</p>

                </div>

            </div>

            <div id="curret-weather-img-div">
                <IconContext.Provider value={{ size: "12em", color: "black", className: "global-class-name" }}>
                    <MainIcon />
                </IconContext.Provider>
            </div>

        </div>
    );
}

export default CurrentWeather