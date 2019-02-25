import actionTypes from '../actions/questions/actions.js';

const ACTION_HANDLERS = {
  [actionTypes.FETCH_QUESTIONS]: state => ({
    ...state,
    loading: true,
  }),
  [actionTypes.FETCH_QUESTIONS_FULFILLED]: (state, action) => ({
    ...state,
    questions: action.data.results,
    loading: false,
  }),
};

const initialState = {
  questions: null,
  questionIndex: 0,
  results: [],
  loading: false,
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
