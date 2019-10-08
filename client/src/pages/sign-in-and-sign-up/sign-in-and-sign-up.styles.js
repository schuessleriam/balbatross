import Styled from 'styled-components';



export const SignInAndSignUpContainer = Styled.div`

    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 799px){
        flex-direction: column;
        width: auto;
        align-content: space-between;
    }
`;

export const FormContainer = Styled.div`
    margin-bottom: 20px;
`;