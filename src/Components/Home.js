import React, { Fragment } from "react";

import { Link, withRouter } from 'react-router-dom';

const Home = ({cities}) => (
    <Fragment>
        <h1>
            WEATHER
        </h1>

        <h3>select a city</h3>

        {cities.map((city) =>
            <div key={city}>
                <Link to={`/${city}`} className="home-links">
                    {city}
                </Link>
            </div>
        )}
    </Fragment>
)
export default withRouter(Home); 