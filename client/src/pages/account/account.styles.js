import Styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const AccountPageContainer = Styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 0;
`;

export const AccountPageTitle = Styled.h1`
    color: rgb(96, 108, 129);
    font-size: 42px;
    margin-bottom: 5px;
    white-space: nowrap;

    @media screen and (max-width: 799px){
        margin-bottom: 15px;
    }

    @media screen and (min-width: 1601px){
        font-size: 72px;
    }
`;

export const AccountPageEmail = Styled.span`
    font-size: 14px;
    margin-bottom: 40px;
    white-space: nowrap;

    @media screen and (min-width: 1601px){
        font-size: 28px;
    }
    
`;
    
export const AccountPageButton = Styled(CustomButton)`
    margin-top: 15px;

    &:hover {
        background-color: rgb(96, 108, 129);
        color: white;
        border: none;
    }
`;


