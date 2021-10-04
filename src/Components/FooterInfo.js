import "./Global.scss";

function FooterInfo(props) {
        return (
            <div className="footer-section-div">

                <div className="footer-dub-section-div">
                    <p className="footer-title">wind speed</p>
                    <p className="footer-data">{props.data.current_wind_speed} m/s</p>
                </div>

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">sunrise</p>
                    <p className="footer-data">{props.data.today_sunrise[0] === '0' ? props.data.today_sunrise.slice(1) : props.data.today_sunrise}</p>
                </div>

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">sunset</p>
                    <p className="footer-data">{props.data.today_sunset[0] === '0' ? props.data.today_sunset.slice(1) : props.data.today_sunset}</p>
                </div>  

                <div className="vl"></div>

                <div className="footer-dub-section-div">
                    <p className="footer-title">humidity</p>
                    <p className="footer-data">{props.data.current_humidity} %</p>
                </div>
            </div>
        );
}

export default FooterInfo