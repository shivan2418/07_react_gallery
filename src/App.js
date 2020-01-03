import React from 'react';
import './css/index.css';
import Main from './Main';
import PageNotFound from './PageNotFound';
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
          <Route exact path='/:query' component={Main} />
          <Route component ={PageNotFound}/>
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
