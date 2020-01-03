import React from 'react';
import './App.css';
import Main from './Main';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const App = ({match}) => {

  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/:query' component={Main} />
        </Switch>


      </div>

    </BrowserRouter>
  );
}

export default App;
