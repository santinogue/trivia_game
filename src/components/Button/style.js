import styled from 'styled-components';

export const ButtonContainer = styled.div`
  cursor: pointer;
  width: 30vh;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  font-weight: bold;
  color: ${props => (props.secondary ? '#0d3653' : '#00c997')};
  background: ${props => (props.secondary ? '#00c49a' : '#0d3653')};

  &:hover {
    background: ${props => (props.secondary ? '#00c49a' : '#00c49a2b')};
    opacity: ${props => (props.secondary ? 0.8 : 1)};
  }
`;

export const LargeButtonContainer = styled(ButtonContainer)`
  flex: 1;
`;
