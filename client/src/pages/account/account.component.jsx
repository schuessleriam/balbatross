import React, {useState, useEffect} from 'react';
import './account.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors.js';
import CustomButton from './../../components/custom-button/custom-button.component';

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
    <div className='account-page-container'>
        <h1 className='title'>
            Hello, {firstName}
        </h1> 
        <span className='email'>
            Email: {email} 
        </span>
        <CustomButton onClick={() => history.push('/shop')}>Go To Shop</CustomButton>
        <CustomButton inverted onClick={() => history.push('/checkout')}>Go To Cart</CustomButton>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(AccountPage));