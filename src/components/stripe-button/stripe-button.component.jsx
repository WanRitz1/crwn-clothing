import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_DWJdDWzppY3GkCcVOJD2Eoh100kcrYAHf1';

    const onToken = token  => {
        console.log(token);
        alert('Payment Successful')
    } 
    return(
    <StripeCheckout
    label='Pay Now'
    name = 'Crown Clothing Pte Ltd'
    billingAddress
    shippingAddress
    image = 'https://sendeyo.com/up/d/f3eb2117da'
    description = {`Your Total is $${price}`}
    amount={priceForStripe}
    panelLabel = 'Pay Now'
    token = {onToken}
    stripeKey = {publishablekey}
    />
    );
};

export default StripeCheckoutButton;