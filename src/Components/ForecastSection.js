import "./Global.scss";

import ForecastWeather from "./ForecastWeather";

function ForecastSection(props) {

    return (
        <div className="forecast-section-div">

        <ForecastWeather data={props.data.dawn} name='dawn'/>
        <ForecastWeather data={props.data.morning} name='morning'/>

        <div id="forecast-middle-spacer"/>

        <ForecastWeather data={props.data.afternoon} name='afternoon'/>
        <ForecastWeather data={props.data.night} name='night'/>

        </div>  
    );
}

export default ForecastSection