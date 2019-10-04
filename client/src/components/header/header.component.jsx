// import base react libraries 
import React, { useState, useEffect } from 'react';
import { useCurrentWidth } from 'react-socks';
// import redux modules and project selectors
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import { signOutStart } from './../../redux/user/user.actions.js';
// import logo and styling
import { ReactComponent as Logo } from "./../../assets/balbatross-logo.svg";
import { HeaderContainer, 
    OptionsContainer, 
    LogoContainer, 
    OptionContainerDiv, 
    OptionContainerLink, 
    Line
} from './header.styles';
// import project components
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


// -- Header functional component -- //
const Header = ({ currentUser, hidden, signOutStart }) => {
    const [showHeader, setShowHeader] = useState({showHeader: false, isMobile: true});
    const width = useCurrentWidth();

    useEffect(() => {
        if(width > 799) {
            setShowHeader({showHeader: true, isMobile: false});
        }else{
            setShowHeader({showHeader: false, isMobile: true});
        }
    },[width]);

    return (
        <HeaderContainer>
        {
            showHeader.isMobile ? <OptionContainerDiv icon onClick={() => 
                setShowHeader({...showHeader, showHeader: !showHeader.showHeader})}>
                &#9776;</OptionContainerDiv> : null
        }
                <LogoContainer to="/">
                    <Logo/>
                </LogoContainer>
                
                <OptionsContainer>
                    {
                    showHeader.showHeader ?
                        <OptionsContainer {...showHeader}>
                            {showHeader.isMobile ? <OptionContainerDiv icon onClick={() => 
                                setShowHeader({...showHeader, showHeader: !showHeader.showHeader})}>
                                &#10005; </OptionContainerDiv>  : null}
                            {showHeader.isMobile ? <OptionContainerDiv><Line/></OptionContainerDiv> : null}
                            <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
                            <OptionContainerLink to="/contact">CONTACT</OptionContainerLink>
                            {currentUser ? <OptionContainerLink  to="/account">ACCOUNT</OptionContainerLink> : null}
                            {currentUser ? <OptionContainerDiv  onClick={signOutStart}>SIGN OUT</OptionContainerDiv>
                            : <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>}
                        </OptionsContainer>

                    : null
                    }
                        <OptionsContainer>
                            <OptionContainerDiv>
                                <CartIcon onClick={() => 
                                    setShowHeader({...showHeader, showHeader: false})}
                                />
                            </OptionContainerDiv>
                        </OptionsContainer>
                </OptionsContainer>
                {
                    !hidden ? <CartDropdown /> : null
                }
            </HeaderContainer>
    );
}




const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);