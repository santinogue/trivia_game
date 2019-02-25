import actionTypes from './actions';
import api from '../../api';
import { push } from 'connected-react-router'

export const getQuestions = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_QUESTIONS })

  api
    .getQuestions()
    .then(data => {
      dispatch({ type: actionTypes.FETCH_QUESTIONS_FULFILLED, data });
    })
    .catch(error => dispatch({ type: actionTypes.RELOAD_USER_FAILURE, error }));
};

export const startQuiz = () => dispatch => {
  dispatch({ type: actionTypes.START_QUIZ });
  dispatch(push('/questions'));
};
