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

    const toggleHeaderDropdown = () => {
        setShowHeader({...showHeader, showHeader: !showHeader.showHeader});
    }

    return (
        <HeaderContainer>
        {
            showHeader.isMobile ? <OptionContainerDiv icon onClick={() => 
                toggleHeaderDropdown()}>
                &#9776;</OptionContainerDiv> : null
        }
                <LogoContainer to="/">
                    <Logo/>
                </LogoContainer>
                
                <OptionsContainer>
                {   
    //render mobile dropdown
                    showHeader.showHeader && showHeader.isMobile ?
                        <OptionsContainer {...showHeader}>
                            <OptionContainerDiv icon onClick={() => toggleHeaderDropdown()}> &#10005; </OptionContainerDiv>  
                            <OptionContainerDiv><Line/></OptionContainerDiv>
                            <OptionContainerLink onClick={() => toggleHeaderDropdown()} to="/">HOME</OptionContainerLink> 
                            <OptionContainerLink onClick={() => toggleHeaderDropdown()} to="/shop">SHOP</OptionContainerLink>
                            <OptionContainerLink onClick={() => toggleHeaderDropdown()} to="/contact">CONTACT</OptionContainerLink>
                            {currentUser ? <OptionContainerLink 
                                onClick={() => toggleHeaderDropdown()} to="/account">
                                ACCOUNT</OptionContainerLink> 
                            : null}
                            {currentUser ? <OptionContainerDiv  onClick={ () => {
                                    toggleHeaderDropdown();
                                    signOutStart();
                                    }
                                }>
                                SIGN OUT</OptionContainerDiv>
                            : <OptionContainerLink onClick={() => toggleHeaderDropdown()} to="/signin">SIGN IN</OptionContainerLink>
                            }
                        </OptionsContainer>
    //render desktop header                          
                    : !showHeader.isMobile ?
                        <OptionsContainer {...showHeader}> 
                            <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
                            <OptionContainerLink to="/contact">CONTACT</OptionContainerLink>
                            {currentUser ? <OptionContainerLink  to="/account">ACCOUNT</OptionContainerLink> : null}
                            {currentUser ? <OptionContainerDiv  onClick={ () => signOutStart()}>SIGN OUT</OptionContainerDiv>
                                : <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>
                            }
                        </OptionsContainer>
                    
                    : null
                }

                    <OptionsContainer>
                        { 
                        !showHeader.isMobile ?
                            <OptionContainerDiv> <CartIcon/> </OptionContainerDiv>
                        :
                            <OptionContainerLink onClick={() => 
                                setShowHeader({...showHeader, showHeader: false})}
                                to="/checkout"
                            >
                                <CartIcon />
                            </OptionContainerLink>
                        }
                    </OptionsContainer>
                </OptionsContainer>
                {
                    !hidden && !showHeader.isMobile ? <CartDropdown/> : null
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