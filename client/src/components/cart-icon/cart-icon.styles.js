import Styled from 'styled-components';
import {ReactComponent as Icon} from './../../assets/shopping-bag.svg'; 

export const CartIconContainer = Styled.div` 
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`; 
export const ShoppingIcon = Styled(Icon)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1601px){
    width: 34px;
    height: 34px;
  }
`;
  
export const ItemCount = Styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;