import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import CreateActivity from "./components/CreateActivity/CreateActivity.jsx";

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
          path="/Home/:idParams"
          component={CountryDetail}
        />
      </Switch>
    </div>
  );
}

export default App;
