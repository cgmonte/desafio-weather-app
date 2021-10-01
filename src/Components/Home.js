import React from "react";

import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.links = this.props.cities.map((city) =>
            <div key={city}>
                <a
                    href={"/" + city}
                    className="home-links"
                >
                    {city}
                </a>
            </div>
        );
    }

    render() {

        return (
            <div>
                <h1>
                    WEATHER
                </h1>

                <h3>
                    select a city
                </h3>

                {this.links}
            </div>
        );
    }
}

export default withRouter(Home);