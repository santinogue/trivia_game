import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from './index';

export const history = createBrowserHistory();
const logger = createLogger({ collapsed: true, diff: true });

export default preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk, logger)),
  );

  return store;
};
