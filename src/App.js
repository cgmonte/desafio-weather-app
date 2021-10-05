import React from "react";

import './App.css';

import CityWeather from './Components/CityWeather';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Components/Home';

function App() {

  const cities = [
    'recife', 'olinda', 'gravata', 
    'sao paulo', 'pequim', 'moscou'
  ]

  const routes = cities.map((city) =>
    <Route path={'/' + city} key={city}>
      <CityWeather />
    </Route>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home
            cities={cities}
          />
        </Route>
        {routes}
      </Switch>
    </BrowserRouter>

  );
}

export default App;