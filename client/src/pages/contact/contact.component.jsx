import React, { useState } from 'react';
import { ContactPageContainer, LinksList, ListItem, AboutList, 
    AboutListItem, IconContainer, TextContainer, Github, Email, 
    Code, At, CopyEmail, Welcome
} from './contact.styles';

const ContactPage = () => {

    const [emailHover, setEmailHover] = useState({
        display: false, 
        message: 'Click to copy to clipboard', 
        copied: false
    });

    const handleEmailHoverMessage = () => {
        setEmailHover({...emailHover, display: true});
    }

    const handleNoEmailHover = () => {
        setEmailHover({...emailHover, display: false});
    }

    const handleEmailCopy = () => {
        navigator.clipboard.writeText('as@schuess.com');
        setEmailHover({
            ...emailHover, 
            copied: true,
            message: 'Email has been copied to clipboard'
        });
    }

    return (
        <ContactPageContainer>
            <Welcome>Welcome to Balbatross Clothing.</Welcome>

            <h3>Email and Links</h3>
            <LinksList>
                <ListItem>
                    <IconContainer>
                        <Email onClick={handleEmailCopy}
                                onMouseEnter={handleEmailHoverMessage}
                                onMouseLeave={handleNoEmailHover}
                        />
                    </IconContainer> 
                    <TextContainer {...emailHover}>as@schuess.com</TextContainer>
                    <CopyEmail {...emailHover}>{emailHover.message}</CopyEmail>
                </ListItem>

                <ListItem>
                    <IconContainer>
                        <a href="https://github.com/schuessleriam"><Github/></a>
                    </IconContainer> 
                    <TextContainer><At/>schuessleriam</TextContainer>
                </ListItem>

                <ListItem>
                    <IconContainer>
                        <a href="https://github.com/schuessleriam/balbatross"><Code/></a>
                    </IconContainer>
                    <TextContainer><At/>schuessleriam/balbatross</TextContainer>
                </ListItem>
            </LinksList>
            
            <h3>About the App</h3>
            <AboutList>
                <AboutListItem> This webapp was built upon React.js and Express.js.</AboutListItem>
                <AboutListItem> Global state management is handled through redux, as well as Async requests through redux sagas. </AboutListItem>
                <AboutListItem> All authentication is done through firebase, and backend data in the firebase firestore. </AboutListItem>
                <AboutListItem> Test transactions are completed by Stripe and is fully implementable for real world use. </AboutListItem>
                <AboutListItem> This App is responsive, try it on mobile! </AboutListItem>
            </AboutList>

            <h3>About Me</h3>
            <AboutList>
                <AboutListItem>
                    My name is Alex, and I am a Frontend Developer from Milwaukee, WI.
                </AboutListItem>
                <AboutListItem>
                    I have a Bachelors of Science in Computer Science and a Minor in Mathematics 
                    from Valparaiso University.
                </AboutListItem>
            </AboutList>
        </ContactPageContainer>
    );
}

export default ContactPage;