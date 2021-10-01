import "./Global.scss";

function CurrentWeather(props) {
    return (
        <div>

            <p className="curren-condition-title">{props.data.current_condition}</p>


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
                <img id="current-temp-img" alt={props.data.current_condition} src={props.data.current_icon_url} />
            </div>

        </div>
    );
}

export default CurrentWeather