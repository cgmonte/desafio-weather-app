import './App.css';

import CityWeather from './Components/CityWeather';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Components/Home';

function App() {

  const cities = ['dallol', 'fairbanks', 'londres', 'recife', 'vancouver', 'yakutsk']
  const hours = [3, 9, 15, 21]

  const routes = cities.map((city) =>
    <Route path={'/' + city} key={city}>
      <CityWeather hours={hours}/>
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
            hours={hours}
          />
        </Route>
        {routes}
      </Switch>
    </BrowserRouter>

  );
}

export default App;