import React from "react";

import CityWeather from "./CityWeather";

import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super()
        this.cities = ['dallol', 'fairbanks', 'londres', 'recife', 'vancouver', 'yakutsk']
        this.hours = [3, 9, 15, 21]
        this.buttons = this.cities.map((city) =>
            <button
                key={city}
                onClick={() => this.OnClickFunction(city)}>
                {city}
            </button>
        );

        this.routes = this.cities.map((city) =>
            <Route path={'/' + city} key={city}>
                <CityWeather key={city} hours={this.hours} />
            </Route>
        );
    }

    OnClickFunction = (city) => {
        // e.target.reset();
        this.props.history.push({
            pathname: "/" + city,
            //  state: {
            //    response: messageFromServer 
            //  } 
        });
    }

    render() {

        return (
            <div>
            <ul>
                {this.buttons}
            </ul>


            <BrowserRouter>
                <Switch>
                    {this.routes}
                </Switch>
            </BrowserRouter>


        </div>
        );
    }
}

export default Home;