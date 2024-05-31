// server.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware

const stripe = require('stripe')('sk_test_51P3Ex9SHryTiu3UWuR8JhMRrMoYxgRL2tdmZhsrUkQeuuZvtm5TfZnbR1ZeI5NXFCDR6xFPtfDPEwfxpHUcsjq7J009IqBMdIc');

const app = express();
app.use(cors());

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000/', // Allow requests from this origin
  }));
  
app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;
  
  const lineItems = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Stripe requires amount in cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Error creating checkout session' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
