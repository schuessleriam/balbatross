import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemContainer,
        BackgroundImage,
        Content,
        Title,
        SubTitle 
} from './menu-item.styles.jsx';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {

    const [mobileTouch, setMobileTouch] = useState({mobileTouch: false})

    return (
        <MenuItemContainer size={size} 
            onTouchStart={() => setMobileTouch({mobileTouch: true})}
            onTouchEnd={() => setMobileTouch({mobileTouch: false})}
            mobileTouch={mobileTouch.mobileTouch}
            onClick={ () => {history.push(`${match.url}${linkUrl}`)}}>
            <BackgroundImage imageUrl={imageUrl} />
            <Content>
                <Title>{title}</Title>
                <SubTitle>shop now</SubTitle>
            </Content>
        </MenuItemContainer>
    );
}
export default withRouter(MenuItem);