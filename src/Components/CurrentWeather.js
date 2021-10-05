import "./Global.scss";

import Icon from "./Icon";

import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";

const CurrentWeather = ({
    data: {
        is_day, 
        current_condition, 
        current_temperature, 
        today_min_temperature, 
        today_max_temperature, 
        current_condition_code
    }}) => (

    <div id="current-weather-div">

    <p id="current-condition-title">{current_condition.toLowerCase()}</p>

    <div id="current-weather-info-div">

        <p id="current-temp-data">{Math.trunc(current_temperature)}</p>

        <div id="current-temp-details">


            <div id="current-temp-unit">
                <p>&deg;C</p>
            </div>

            <div className="grow-box"></div>

            <div className="current-max-data">

                <HiOutlineArrowNarrowUp />
                <p>{Math.trunc(today_max_temperature)}&deg;</p>

            </div>


            <div className="current-min-data">

                <HiOutlineArrowNarrowDown />
                <p>{Math.trunc(today_min_temperature)}&deg;</p>

            </div>

        </div>

    </div>

    <div id="current-weather-icon-div">
        <Icon isDay={is_day} conditionCode={current_condition_code} />
    </div>

</div>
)

export default CurrentWeather