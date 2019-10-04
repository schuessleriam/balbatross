import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
    align-content: center;
`;

const OptionsContainerMobileStyles = css`
    position: fixed;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    background-color: white;
    top: 17px;
    left: 2px;
    z-index: 5;
    font-size: 26px;
`;

const GetMobileStyles = props => {
    if(props.isMobile){
        return OptionsContainerMobileStyles;
    }
};

const GetIconStyles = props => {
    if(props.icon){
        return css`
            font-size: 34px;
            margin-right: -8px;
        `;
    }
};

export const HeaderContainer = Styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 25px;

    @media (max-width: 799px){
        position: fixed;
        background-color: white;
        width: 100%;
        z-index: 5;
        opacity: 0.95;
        margin: -8px //to bypass parent global padding.//
    }
`;

export const LogoContainer = Styled(Link)`
    height: 100%;
    width: 120px;
    padding: 25px;

    @media (max-width: 799px){
        width: 80px;
        padding: 10px;
    }
`;

export const OptionsContainer = Styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${GetMobileStyles};
`;
    

export const OptionContainerDiv = Styled.div`
${GetIconStyles};
${OptionContainerStyles};
`;

export const OptionContainerLink = Styled(Link)`
${OptionContainerStyles};
`;

export const Line = Styled.hr`
    margin-top: 5px;
    margin-bottom: 5px;
    height: 2px;
    width: 70px;
    border-width: 0;
    color: rgb(96, 108, 129);
    background-color: rgb(96, 108, 129);
`;



