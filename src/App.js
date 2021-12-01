import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WeatherNavBar from './components/WeatherNavBar/WeatherNavBar';


function App() {
  return (
    <div className="App">
      <WeatherNavBar/>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/favorite"> 
          <FavoritesPage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
