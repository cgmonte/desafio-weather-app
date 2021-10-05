import "./Global.scss";

import ForecastWeather from "./ForecastWeather";

function ForecastSection({data: {dawn, morning, afternoon, night}}) {

    return (
        <div className="forecast-section-div">

        <ForecastWeather data={dawn} name='dawn'/>
        <ForecastWeather data={morning} name='morning'/>

        <div id="forecast-middle-spacer"/>

        <ForecastWeather data={afternoon} name='afternoon'/>
        <ForecastWeather data={night} name='night'/>

        </div>  
    );
}

export default ForecastSection