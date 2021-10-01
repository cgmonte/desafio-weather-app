import React from "react";

import "./Global.scss";

class FooterInfo extends React.Component {
    render() {
        return (
            <div className="footer-section-div">

                <div className="footer-dub-section-div">
                    <p className="footer-title">wind speed</p>
                    <p className="footer-data">{this.props.data.current_wind_speed} m/s</p>
                </div>
                <div className="footer-dub-section-div">
                    <p className="footer-title">sunrise</p>
                    <p className="footer-data">{this.props.data.today_sunrise}</p>
                </div>
                <div className="footer-dub-section-div">
                    <p className="footer-title">sunset</p>
                    <p className="footer-data">{this.props.data.today_sunset}</p>
                </div>
                <div className="footer-dub-section-div">
                    <p className="footer-title">humidity</p>
                    <p className="footer-data">{this.props.data.current_humidity} %</p>
                </div>
            </div>
        );
    }
}

export default FooterInfo