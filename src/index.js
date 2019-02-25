import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import * as serviceWorker from './serviceWorker';

import configureStore, { history } from './store/store';
import Home from './pages/Home';
import Question from './pages/Question';
import Layout from './components/Layout';

import './index.css';

const store = configureStore();

const renderWithLayout = component => <Layout>{component}</Layout>;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" render={() => renderWithLayout(<Home />)} />
        <Route
          exact
          path="/questions"
          render={() => renderWithLayout(<Question />)}
        />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
