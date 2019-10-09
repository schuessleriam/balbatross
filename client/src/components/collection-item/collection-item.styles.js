import Styled from 'styled-components';
import CustomButton from "./../custom-button/custom-button.component";

export const ItemImage = Styled.div` 
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const ItemButton = Styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 70%;
  display: none;

  @media screen and (max-width: 799px){
    display: flex;
    opacity: 1.0;
  }
`;

export const CollectionItemContainer = Styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  min-width: 175px;
  margin: 0 10px;

  @media screen and (max-width: 799px){
    min-width: 210px;
  }

  @media screen and (min-width: 1600px){
    height: 500px;
    min-width: 200px;
  }

  &:hover{

    @media screen and (min-width: 800px){

      ${ItemImage} {
        opacity: 0.8;
      }

      ${ItemButton} {
        opacity: 0.85;
        display: flex;
      }
    }
  }
`;
  
  
export const ItemFooter = Styled.div` 
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 25px;

  @media screen and (min-width: 1601px){
    font-size: 24px;
  }
`;


    
  