import Styled from 'styled-components';
import CustomButton from './../custom-button/custom-button.component';

export const CartDropdownContainer = Styled.div` 
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyCart = Styled.span`
  font-size: 18px;
  margin: 100px auto;
`;
  
export const CartItems = Styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;
  
export const CheckoutButton = Styled(CustomButton)`
  margin-top: auto;
`;
  