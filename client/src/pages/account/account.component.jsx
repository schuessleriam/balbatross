import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors.js';
import { AccountPageContainer, AccountPageTitle, AccountPageEmail, AccountPageButton } from './account.styles';

const AccountPage = ({user: {displayName, email}, history}) => {

    const [firstNameState, setFirstName] = useState({firstName: ''})
    const {firstName} = firstNameState;
    useEffect(() => {
        const slicedName = displayName.substring(0,displayName.indexOf(" "));
        if (slicedName){
            setFirstName({firstName: slicedName});
        }else{
            setFirstName({firstName: displayName})
        }
    }, [displayName]);
    

    return(
    <AccountPageContainer>
        <AccountPageTitle>
            Hello, {firstName}
        </AccountPageTitle> 
        <AccountPageEmail>
            Email: {email} 
        </AccountPageEmail>
        <AccountPageButton onClick={() => history.push('/shop')}>Go To Shop</AccountPageButton>
        <AccountPageButton inverted onClick={() => history.push('/checkout')}>Go To Cart</AccountPageButton>
    </AccountPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(AccountPage));