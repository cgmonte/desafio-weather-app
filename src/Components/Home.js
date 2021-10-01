import React from "react";

import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.buttons = this.props.cities.map((city) =>
            <a href={"/" + city}>{city}</a>
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

                <ul>
                    {this.buttons}
                </ul>
            </div>
        );
    }
}

export default withRouter(Home);