import "./Global.scss";

import { IconContext } from "react-icons";

import { getIcon } from "../lib/utils";

import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";

function CurrentWeather(props) {

    const MainIcon = getIcon({
        isDay: props.data.is_day,
        conditionCode: props.data.current_condition_code
    })

    return (
        <div id="current-weather-div">

            <p id="current-condition-title">{props.data.current_condition.toLowerCase()}</p>


            <div id="current-weather-info-div">

                <p id="current-temp-data">{Math.trunc(props.data.current_temperature)}</p>

                <div id="current-temp-details">


                    <div id="current-temp-unit">
                        <p>&deg;C</p>
                    </div>

                    <div className="grow-box"></div>

                    <div className="current-max-data">

                        <HiOutlineArrowNarrowUp />
                        <p>{Math.trunc(props.data.today_max_temperature)}&deg;</p>

                    </div>


                    <div className="current-min-data">

                        <HiOutlineArrowNarrowDown />
                        <p>{Math.trunc(props.data.today_min_temperature)}&deg;</p>

                    </div>

                </div>


            </div>

            <div id="curret-weather-icon-div">
                <IconContext.Provider value={{ size: "10em", color: "black", className: "big-icon" }}>
                    <MainIcon />
                </IconContext.Provider>
            </div>

        </div>
    );
}

export default CurrentWeather