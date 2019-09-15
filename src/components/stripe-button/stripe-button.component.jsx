import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUserEmail } from './../../redux/user/user.selectors.js';

const StripeCheckoutButton = ( { price, email } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TqhcjYVHHmaeHAlpaEnzMQHo00qdZNcDZw';

    const onToken = token => {
        console.log(token);
        alert("Test Payment Sucessful");
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='A Bathing Albatross'
        email={email}
        billingAddress
        shippingAddress
        //image='https://alex.schuess.com/assets/balbatross-stripe-logo.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    email: selectCurrentUserEmail
});

export default connect(mapStateToProps)(StripeCheckoutButton);