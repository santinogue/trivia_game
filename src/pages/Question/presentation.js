import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  QuestionContainer,
  QuestionCategory,
  QuestionQ,
  Actions,
} from './style';
import Button from '../../components/Button';
import Path from '../../components/Path';

class Question extends PureComponent {
  constructor(props) {
    super(props);

    this.parser = new DOMParser();
  }

  render() {
    const { category, question, questionIndex } = this.props;

    const dom = this.parser.parseFromString(question, 'text/html');
    const questionText = dom.body.textContent;

    return (
      <QuestionContainer>
        <Path activeIndex={questionIndex} />
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
  questionIndex: PropTypes.number.isRequired,
};

export default Question;
