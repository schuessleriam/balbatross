import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 80px;

        @media (max-width: 800px) {
            padding: 8px;
        }

        @media (min-width: 1601px) {
            padding: 40px 160px;
            font-size: 28px;
        }
    }
    
    a{
        text-decoration: none;
        color: black;
    }
    
    *{
        box-sizing: border-box;
    }
`;

export const MobileSpacer = Styled.div`
@media (max-width: 799px){
    height: 70px;
    width: 100%;
}
`;