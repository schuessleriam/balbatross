import Styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = Styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = Styled(Link)`
    height: 100%;
    width: 120px;
    padding: 25px;
`;

export const OptionsContainer = Styled.div`
    width: 50%; 
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionContainerDiv = Styled.div`
${OptionContainerStyles}
`;

export const OptionContainerLink = Styled(Link)`
${OptionContainerStyles}
`;


