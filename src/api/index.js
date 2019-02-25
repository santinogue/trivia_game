import makeRequest from './utils';

const getQuestions = () =>
  makeRequest(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );

const getQuestions2 = () => makeRequest();

export default {
  getQuestions,
  getQuestions2,
};
