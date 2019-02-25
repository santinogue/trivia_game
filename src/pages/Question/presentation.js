import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  QuestionContainer,
  QuestionCategory,
  QuestionQ,
  Actions,
} from './style';
import Button from '../../components/Button';

class Question extends PureComponent {
  constructor(props) {
    super(props);

    this.parser = new DOMParser();
  }

  render() {
    const { category, question, answer } = this.props;

    const dom = this.parser.parseFromString(question, 'text/html');
    const questionText = dom.body.textContent;

    return (
      <QuestionContainer>
        <QuestionCategory>{category}</QuestionCategory>
        <QuestionQ>{questionText}</QuestionQ>
        <Actions>
          <Button secondary large>
            True
          </Button>
          <Button secondary large>
            False
          </Button>
        </Actions>
      </QuestionContainer>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Question;
