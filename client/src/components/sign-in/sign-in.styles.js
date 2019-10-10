import Styled from 'styled-components';

export const SignInContainer = Styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`;

export const SignInTitle = Styled.h2`
    margin: 10px 0;
`;

export const Buttons = Styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 799px){
        white-space: noWrap;
    }
`;