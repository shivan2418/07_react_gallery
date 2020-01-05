import React from 'react';
import './css/index.css';
import Main from './Components/Main';
import PageNotFound from './Components/PageNotFound';
import {
  BrowserRouter,
  Route,
  Switch,
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
