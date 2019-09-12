// import base react libraries 
import React from 'react';
// import firebase authorization library
import { auth } from './../../firebase/firebase.utils';
// import redux modules and project selectors
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "./../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selectors";
// import logo and styling
import { ReactComponent as Logo } from "./../../assets/balbatross-logo.svg";
import { HeaderContainer, OptionsContainer, LogoContainer, OptionContainerDiv, OptionContainerLink } from './header.styles';
// import project components
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


// -- Header functional component -- //
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo/>
        </LogoContainer>

        <OptionsContainer>
            <OptionContainerLink  to="/shop">SHOP</OptionContainerLink>
            <OptionContainerLink  to="/contact">CONTACT</OptionContainerLink>
        {
           currentUser ?
            <OptionContainerDiv  onClick={() => auth.signOut()}>SIGN OUT</OptionContainerDiv>
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

export default connect(mapStateToProps)(Header);