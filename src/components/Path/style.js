import styled from 'styled-components';

export const PathContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 6vh;
`;

export const PathItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #003655;
  color: #0d3653;
  background: #00c997;
  opacity: ${props => (props.active ? 1 : 0.6)}
`;
