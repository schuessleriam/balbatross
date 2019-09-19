import React from 'react';
import './account.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors.js';
import CustomButton from './../../components/custom-button/custom-button.component';

const AccountPage = ({user: {displayName, email}, history}) => (
    <div className='account-page-container'>
        <h1 className='title'>
            Welcome, {displayName.substring(0,displayName.indexOf(" "))}
        </h1> 
        <span className='email'>
            Email: {email} 
        </span>
        <CustomButton onClick={() => history.push('/shop')}>Go To Shop</CustomButton>
        <CustomButton inverted onClick={() => history.push('/checkout')}>Go To Cart</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(AccountPage));