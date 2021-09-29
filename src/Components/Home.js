import React from "react";

import { withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.buttons = this.props.cities.map((city) =>
            <button
                key={city}
                onClick={() => this.OnClickFunction(city)}>
                {city}
            </button>
        );
    }

    OnClickFunction = (city) => {
        this.props.history.push({
            pathname: "/" + city,

        });
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