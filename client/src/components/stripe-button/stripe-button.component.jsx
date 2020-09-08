import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => alert('Payment Successful!'))
      .catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert('There was an issue with your payment. Please make sure you use the provided credit card methods');
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      shippingAddress
      billingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={ `Your total is £${ price }` }
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publishableKey } />
  );
};

export default StripeCheckoutButton;
