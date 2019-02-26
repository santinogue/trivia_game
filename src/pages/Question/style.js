import styled from 'styled-components';

export const QuestionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const QuestionCategory = styled.div`
  position: absolute;
  display: flex;
  padding: 0 20px 0 20px;
  align-items: center;
  top: 6vh;
  left: 0;
  height: 40px;
  min-width: 120px;
  background: #00a1e0;
  color: white;
  font-size: 20px;
  font-weight: 300;
  border-bottom-right-radius: 5px;
`;

export const QuestionQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  min-height: 20vh;
  border-radius: 5px;
  background: #e0e6e8;
  padding: 30px;
  font-size: 20px;
  color: #0d3653;
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
