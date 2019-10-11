import Styled from 'styled-components';
import {ReactComponent as GithubIcon} from './../../assets/mark-github.svg';
import {ReactComponent as EmailIcon} from './../../assets/mail.svg';
import {ReactComponent as CodeIcon} from './../../assets/code.svg';
import {ReactComponent as AtIcon} from './../../assets/mention.svg';

export const ContactPageContainer = Styled.div`
    padding: 10px;
    font-size: 18px;
    @media screen and (max-width: 799px){
        text-align: center;
    }
`;

export const Welcome = Styled.p`
    text-align: center;
    @media screen and (max-width: 799px){
        text-align: left;
    }
`

export const LinksList = Styled.ul`
    list-style-type: none;
    margin-left: -40px;
`;

export const ListItem = Styled.li`
    display: flex;
    list-style-type: none;
    width: 400px;
    height: 35px;
    font-size: 16px;
`;

export const TextContainer = Styled.span`
    ${props => props.displayMessage ? "display: none" : "display: flex"};
    align-items: center;
    ${props => props.displayMessage ? 'width: 100px' : 'width: 150px'};
`;

export const IconContainer = Styled.div`
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
`;

export const Github = Styled(GithubIcon)`
    height: 40px;
    width: 20px;
    margin-top: 6px;
`;

export const CopyEmail = Styled.span`
    ${props => props.displayMessage ? "display: flex" : "display: none"};
    width: 240px;
    align-items: center;
    font-size: 14px;
    margin-top: 2px;
    color: rgb(96, 108, 129);
`;

export const Email = Styled(EmailIcon)`
    height: 40px;
    width: 20px;
    margin-top: 3px;
    cursor: pointer;
`;

export const Code = Styled(CodeIcon)`
    height: 40px;
    width: 20px;
    margin-top: 7px;
`;

export const At = Styled(AtIcon)`
    height: 18px;
    margin-top: 4px;
    margin-right: 2px;
`;

export const AboutList = Styled.ul`
    list-style-type: circle;
`;

export const AboutListItem = Styled.li`
    font-size: 16px;
    margin-bottom: 10px;
    @media screen and (max-width: 799px){
        text-align: left;
    }
`;
