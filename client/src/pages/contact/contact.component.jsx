import React, { useState } from 'react';
import { useCurrentWidth } from 'react-socks';
import { ContactPageContainer, LinksList, ListItem, AboutList, 
    AboutListItem, IconContainer, TextContainer, Github, Email, 
    Code, At, CopyEmail, Welcome
} from './contact.styles';

const ContactPage = () => {

    const [emailHover, setEmailHover] = useState({
        displayMessage: false, 
        message: 'Copy email to clipboard'
    });

    const width = useCurrentWidth();

    const handleEmailHoverMessage = () => {
        setEmailHover({...emailHover, displayMessage: true});
    }

    const handleNoEmailHover = () => {
        setEmailHover({...emailHover, displayMessage: false});
    }

    const handleEmailCopy = () => {
        if (document.queryCommandSupported('copy')){
            const address = document.createElement('textarea');
            address.innerText = 'as@schuess.com';
            document.body.appendChild(address);
            address.select();
            document.execCommand('copy');
            address.remove();
        }

        setEmailHover({
            ...emailHover, 
            message: 'Email has been copied to clipboard'
        });

        if(width < 800){
            setTimeout(() => {
                setEmailHover({ 
                    message: 'Email has been copied to clipboard', 
                    displayMessage: false
                });
            }, 3000);
        }
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
                    <TextContainer {...emailHover}>
                        as@schuess.com
                    </TextContainer>
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
                <AboutListItem> This web app was built upon React.js and Express.js.</AboutListItem>
                <AboutListItem> Global state management is handled through Redux, as well as async requests through Redux Sagas. </AboutListItem>
                <AboutListItem> All authentication is handled by Firebase, and the database is a Firebase Firestore. </AboutListItem>
                <AboutListItem> Test transactions are completed by Stripe and is fully implementable for real world use. </AboutListItem>
                <AboutListItem> This app is responsive, try it on mobile! </AboutListItem>
            </AboutList>

            <h3>About Me</h3>
            <AboutList>
                <AboutListItem>
                    My name is Alex, and I am a web developer from Milwaukee, WI.
                </AboutListItem>
                <AboutListItem>
                    I have a Bachelor of Science in Computer Science and a Minor in Mathematics 
                    from Valparaiso University.
                </AboutListItem>
            </AboutList>
        </ContactPageContainer>
    );
}

export default ContactPage;