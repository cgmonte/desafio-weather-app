import ReactDOM from 'react-dom'

import './App.css';

import CityWeather from './Components/CityWeather';

import WeatherCard from './Components/WeatherCard';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useHistory } from "react-router";

function App() {

  const cities = ['dallol', 'fairbanks', 'londres', 'recife', 'vancouver', 'yakutsk']
  const hours = [3, 9, 15, 21]
  // const history = useHistory();

  const OnClickFunction = (city) => {
    let history = useHistory();

    console.log(city)
 }

  const buttons = cities.map((city) =>
    <button
      key={city}
      onClick={() => OnClickFunction(city)}>
      {city}
    </button>
  );

  const routes = cities.map((city) =>
    <Route path={'/' + city} key={city}>
      <CityWeather key={city} hours={hours}/>
    </Route>
  );

  return (
    <div className="App">
      <ul>
        {buttons}
      </ul>


      <BrowserRouter>
        <Switch>
          {routes}
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;