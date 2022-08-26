import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

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
      </Switch>
    </div>
  );
}

export default App;
