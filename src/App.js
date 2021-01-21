import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      
      <Header />

      <Router>
        <Switch>

          <Route path='/chat'>

          </Route>

          <Route path='/'>
            <TinderCards />
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
