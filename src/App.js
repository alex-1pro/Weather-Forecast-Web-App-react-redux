import './App.css';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WeatherNavBar from './components/WeatherNavBar/WeatherNavBar';
import { useSelector } from 'react-redux';


function App() {

  // const error = useSelector(state => state.appReducer.error);

  return (
    <div className="App">
      <WeatherNavBar />
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
