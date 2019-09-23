import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser} from './../../redux/user/user.selectors.js';

const StripeCheckoutButton = ( { price, user: {email} } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TqhcjYVHHmaeHAlpaEnzMQHo00qdZNcDZw';

    const onToken = token => {
        axios({
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           } 
        }).then(response => {
            alert("Payment accepted and processed successfully")
        }).catch(error => {
            console.log(error);
            alert('There was an issue processing your payment. '
                + 'Be sure to use the provided test credit card information'
            );
        });
    }

    return(
        <StripeCheckout
        label='Pay Now'
        name='A Bathing Albatross'
        email={email}
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

export default connect(mapStateToProps)(StripeCheckoutButton);