import styled from 'styled-components';

import QuizImage from '../../resources/quiz.png';

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  color: #00c19c;
  height: 100vh;
  width: 100%;
  max-width: 800px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32vh;
  width: 100%;
  background: #e0e6e8;
  padding: 1vh 0 1vh 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #0d3653;
`;

export const QuizIcon = styled.div`
  background-image: url(${QuizImage});
  width: 24vh;
  height: 24vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
