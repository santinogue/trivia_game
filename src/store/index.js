import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import questionsReducer from '../reducers/questions';

export default history =>
  combineReducers({
    router: connectRouter(history),
    questions: questionsReducer,
  });
