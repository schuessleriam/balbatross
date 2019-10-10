import Styled from 'styled-components';

export const SignOnErrorContainer = Styled.div`
  position: fixed;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  align-content: space-between;
  justify-content: space-between;
  z-index: 5;
  top: 50%;
  left: 50%;
  margin-top: -125px; 
  margin-left: -125px;
`;

export const ErrorMessageContainer = Styled.span`
    font-size: 18px;
    text-align: center;
`;
