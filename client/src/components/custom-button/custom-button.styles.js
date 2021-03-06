import Styled, { css } from 'styled-components';

const googleButtonStyles = css`
    background-color: #4285f4;
    color: white;

    @media screen and (min-width: 800px){
        &:hover {
          background-color: #357ae8;
          border: none;
        }
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    @media screen and (min-width: 800px){
        &:hover {
          background-color: black;
          color: white;
          border: none;
        }
    }
`;

const buttonStyles = css`
background-color: black;
    color: white;
    border: none;

    @media screen and (min-width: 800px){
        &:hover {
            background-color: white;
            color: black;
            border: 1px solid black;
        }
    }
`;

const GetButtonStyles = props => {
    if(props.isGoogle){
        return googleButtonStyles;
    }
    else if(props.inverted){
        return invertedButtonStyles;
    }
    else{
        return buttonStyles;
    }

};

export const CustomButtonContainer = Styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    ${GetButtonStyles}
    
`;