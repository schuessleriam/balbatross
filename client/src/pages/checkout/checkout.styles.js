import Styled from 'styled-components';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component';

export const CheckoutPageContainer = Styled.div` 
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 799px){
    width: 95%;
    margin: 5px auto 0;
  }
`;

export const CheckoutHeader = Styled.div` 
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = Styled.div` 
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
    margin-right: 10px;
  }
`;

export const TotalAndPay = Styled.div` 
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px; 
`;

export const Total = Styled.div` 
        font-size: 36px;
        justify-content: flex-end;
`;

export const CheckoutButton = Styled(StripeCheckoutButton)`
  justify-content: flex-start;
  margin-top: auto;
  margin-bottom: auto;      
`;

export const Disclaimer = Styled.div`
  font-size: 10px;
  margin-top: 5px;
  text-align: start;
  color: grey;
`;

export const TestCardDisclaimer = Styled.div`
  margin-top: 40px;
  font-size: 24px;
  text-align: center;
  color: red;

  @media screen and (max-width:799px) {
    font-size: 16px;
    margin-top: 20px; 
  }
`;