import Styled from 'styled-components';

export const BackgroundImage = Styled.div` 
  height: 100%;
  width: 100%;
  background: url(${props => props.imageUrl});  
  background-position: center; 
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = Styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;


export const Title = Styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = Styled.span`
  text-align: center;
  font-weight: lighter;
  font-size: 16px;
`;


export const MenuItemContainer = Styled.div`
  min-width: 30%;
  height: 240px;
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center; 
  background-size: cover;
  overflow: hidden;
  opacity: ${props => props.mobileTouch ? "0.5" : "1"};
    
  @media screen and (min-width: 426px) and (max-width: 799px) {
    width: 45%;
  }
  
  @media screen and (min-width: 800px) {

    @media screen and (max-width: 1600px) {
      height: ${props => props.size ? "380px" : "240px"};
    }

    @media screen and (min-width: 1600px) {
      height: ${props => props.size ? "570px" : "360px"};
    }

    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;

      ${BackgroundImage} {
          transform: scale(1.05);
          transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      ${Content} {
          opacity: 0.9;
      }
    }
  }
`;

    