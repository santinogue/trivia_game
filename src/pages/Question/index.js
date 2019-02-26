import { connect } from 'react-redux';

import Question from './presentation';

const mapStateToProps = state => {
  const { questionIndex, questions } = state.questions;
  const questionData = questions[questionIndex];
  const { category, correct_answer: answer, question } = questionData;

  return {
    question,
    category,
    answer,
    questionIndex,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Question);
