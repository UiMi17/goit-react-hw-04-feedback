import styled from 'styled-components';

export const StyledFeedbackOptions = styled.ul`
  padding: 0;
  margin: 0;
`;

export const StyledFeedbackBtn = styled.button`
  font-size: 18px;
  margin: 0 10px;
  padding: 4px 7px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #42b883;
  transition: background-color 0.3s ease;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #54d1a1;
  }
  &:focus {
    background-color: #54d1a1;
    outline: none;
  }
  &:active {
    background-color: #2e856e;
  }
`;
