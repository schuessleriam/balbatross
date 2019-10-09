import Styled from 'styled-components';

export const CheckoutItemContainer = Styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width:799px){
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 10px;
`;
  
export const ImageContainer = Styled.div`
  width: 23%;
  padding-right: 15px;

  @media screen and (max-width:799px){
    grid-column: 1 / 4;
    grid-row: 1 / 3;
    width: unset;
    padding-right: unset;
    padding-top: 20px;
    text-align: center;
`;
  
export const ItemImage = Styled.img` 
  width: 100%;
  height: 100%;
  max-height: 200px;
  max-width: 150px;
`; 
    

export const ItemName = Styled.div`
  width: 23%;

  @media screen and (max-width:799px){
    grid-column: 4 / 6;
    grid-row: 1 / 3;
    width: unset;
    text-align: center;
  }
`;   

export const ItemQuantity = Styled.div`
  display: flex;
  width: 23%;
  
  @media screen and (max-width:799px){
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    width: unset;
    justify-content: center;
  }
`;

export const Arrow = Styled.div`
  cursor: pointer;
`;

export const Value = Styled.span`
  margin: 0 10px;
`;

export const ItemPrice = Styled.div`
  width: 23%;

  @media screen and (max-width:799px){
    grid-column: 4 / 6;
    grid-row: 3 / 4;
    width: unset;
    text-align: center;
  }
`;
  
export const RemoveButton = Styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width:799px){
    width: unset;
    grid-column: 6 / 7;
    grid-row: 1 / 4;
    text-align: center;        
  }
`;