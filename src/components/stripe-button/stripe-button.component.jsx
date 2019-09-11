import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price } ) => {
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

export default StripeCheckoutButton;