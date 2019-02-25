import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner';
import Button from '../../components/Button';

class Home extends PureComponent {
  componentDidMount() {
    const { getQuestions } = this.props;

    getQuestions();
  }

  render() {
    const { loading, startQuiz } = this.props;
    return (
      <Fragment>
        <Button onClick={startQuiz}>Start Quiz!</Button>
        <Spinner loading={loading} />
      </Fragment>
    );
  }
}

Home.propTypes = {
  getQuestions: PropTypes.func.isRequired,
  startQuiz: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
