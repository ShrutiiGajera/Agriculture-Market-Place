import React, { useState } from 'react';
import './css/success.css';

function Checkout() {
    const [paymentOption, setPaymentOption] = useState('');

    const handlePayment = (option) => {
        // Perform any necessary actions based on the selected payment option
        // For demonstration purposes, let's assume the payment is successful
        setPaymentOption(option);
    };

    return (
        <div className="success-page">
            {paymentOption ? (
                <>
                    <img src="http://share.ashiknesin.com/green-checkmark.png" className="center" alt="" />
                    <h2 className='sel'>Payment Successful !</h2>
                    <p className='met'>We are delighted to inform you that we received your payment via {paymentOption}</p>
                    <a href="/shop">Continue Shopping</a>
                </>
            ) : (
                <>
                    <h2 className='sel'>Select Payment Option</h2>
                    <div className="payment-options">
                    <button className='cash' onClick={() => handlePayment('Cash on Delivery')}>Cash on Delivery</button>
                   {/* <button className='cash' onClick={() => handlePayment('Gpay')}>Gpay</button>
                        <button className='cash' onClick={() => handlePayment('Phone Pay')}>Phone Pay</button>
                        <button className='cash' onClick={() => handlePayment('Card')}>Credit Card</button> */}
                    </div>
                </>
            )}
        </div>
    );
}

export default Checkout;




// import React, { useState, useEffect } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('pk_test_51P3Ex9SHryTiu3UWh31cobeooiJqj7WZyyePK1vcC032MuQ8DGUUIfsQldUtz4BDLoqBLoJWmzeyTvFXk2Qd2L0b0060rh83hX'); // Replace with your publishable key

// const Checkout = () => {
//     const [clientSecret, setClientSecret] = useState('');

//     useEffect(() => {
//         // Simulate fetching the client secret from your server-side code
//         // (replace with your actual API call)
//         fetch('/create-payment-intent', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ amount: 1000 }), // Replace 1000 with your desired amount in cents
//         })
//             .then(res => res.json())
//             .then(data => setClientSecret(data.clientSecret));
//     }, []);

//     const handlePaymentSubmit = async (event) => {
//         event.preventDefault();

//         const stripe = await stripePromise;

//         if (!clientSecret) {
//             console.error('Missing client secret!');
//             return;
//         }

//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: event.currentTarget.elements.card,
//             },
//         });

//         if (paymentResult.error) {
//             // Show error message to the user
//             console.error(paymentResult.error.message);
//         } else {
//             // Payment successful, handle confirmation or redirect
//             console.log('Payment successful!');
//         }
//     };

//     return (
//         <Elements stripe={stripePromise}>
//             <form onSubmit={handlePaymentSubmit}>
//                 <div>
//                     <label htmlFor="cardElement">Card details</label>
//                     <Elements.CardNumber id="cardElement" />
//                 </div>
//                 <button type="submit" disabled={!clientSecret}>
//                     Pay $10.00
//                 </button>
//             </form>
//         </Elements>
