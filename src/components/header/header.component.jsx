// import base react libraries 
import React from 'react';
// import redux modules and project selectors
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
import { signOutStart } from './../../redux/user/user.actions.js';
// import logo and styling
import { ReactComponent as Logo } from "./../../assets/balbatross-logo.svg";
import { HeaderContainer, OptionsContainer, LogoContainer, OptionContainerDiv, OptionContainerLink } from './header.styles';
// import project components
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


// -- Header functional component -- //
const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo/>
        </LogoContainer>

        <OptionsContainer>
            <OptionContainerLink  to="/shop">SHOP</OptionContainerLink>
            <OptionContainerLink  to="/contact">CONTACT</OptionContainerLink>
            {currentUser ? <OptionContainerLink  to="/account">ACCOUNT</OptionContainerLink> : null}
        {
           currentUser ?
            <OptionContainerDiv  onClick={signOutStart}>SIGN OUT</OptionContainerDiv>
            :
            <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>
        }
            <CartIcon/>
        </OptionsContainer>
        {
            !hidden ? <CartDropdown /> : null
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);