import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path='/chats'>
            <Header backButton='/'/>
            <Chats />
          </Route>

          <Route path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
