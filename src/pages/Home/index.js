import { connect } from 'react-redux';

import { getQuestions, startQuiz } from '../../actions/questions';

import Home from './presentation';

const mapStateToProps = state => ({
  loading: state.questions.loading,
});

const mapDispatchToProps = {
  getQuestions,
  startQuiz,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
