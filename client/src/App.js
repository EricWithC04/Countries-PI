import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx";
import Error404 from './components/Error404/Error404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path="/"
          component={LandingPage}
        />
        <Route 
          exact path="/Home"
          component={Home}
        />
        <Route 
          path="/Home/CreateActivity"
          component={CreateActivity}
        />
        <Route
          path="/Home/Country/:idParams"
          component={CountryDetail}
        />
        <Route
          path="*"
          component={Error404}
        />
      </Switch>
    </div>
  );
}

export default App;
