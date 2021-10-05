import React from "react";

import './App.css';

import CityWeather from './Components/CityWeather';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Components/Home';

// import { useMediaQuery } from 'react-responsive'

function App() {

  // const mediaQuery = {
  //   isBigScreen: useMediaQuery({ minWidth: 1824 }),
  //   isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
  //   isPortrait: useMediaQuery({ orientation: 'portrait' }),
  //   isRetina: useMediaQuery({ minResolution: '2dppx' })
  // }

  // const MediaContext = React.createContext({});

  const cities = ['fairbanks', 'londres', 'recife', 'vancouver', 'yakutsk', 'sidney']

  const routes = cities.map((city) =>
    <Route path={'/' + city} key={city}>
      {/* <MediaContext.Provider value={mediaQuery}> */}
        <CityWeather />
      {/* </MediaContext.Provider> */}
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