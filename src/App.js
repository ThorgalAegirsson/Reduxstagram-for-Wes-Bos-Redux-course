import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Single from './components/Single/Single';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>
            <Link to='/'>Reduxstagram</Link>
          </h1>
          <Switch>
            <Route path='/view/:postId' component={Single} />
            <Route exact path='/' component={PhotoGrid} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
