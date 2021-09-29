// import logo from './logo.svg';

import './App.css';

import CityWeather from './Components/CityWeather';

function App() {

  // const cities = ['Dallol', 'Fairbanks', 'Londres', 'Recife', 'Vancouver', 'Yakutsk']
  const hours = [3, 9, 15, 21]

    return (
      <div className="App">
        <CityWeather city="recife" hours={hours}/>
      </div>
    );
  }

  export default App;
