import "./Global.scss";

function FooterInfo({data: {current_wind_speed, today_sunrise, today_sunset, current_humidity}}) {
        return (
            <div className="footer-section-div">

                <div className="footer-dub-section-div">
                    <p className="footer-title">wind speed</p>
                    <p className="footer-data">{current_wind_speed} m/s</p>
                </div>

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">sunrise</p>
                    <p className="footer-data">{today_sunrise[0] === '0' ? today_sunrise.slice(1) : today_sunrise}</p>
                </div>

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">sunset</p>
                    <p className="footer-data">{today_sunset[0] === '0' ? today_sunset.slice(1) : today_sunset}</p>
                </div>  

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">humidity</p>
                    <p className="footer-data">{current_humidity} %</p>
                </div>
            </div>
        );
}

export default FooterInfo