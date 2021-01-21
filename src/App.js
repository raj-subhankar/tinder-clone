import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
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
            <SwipeButtons />
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
