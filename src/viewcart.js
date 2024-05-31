import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/view-cart.css';

function ViewCart() {
    const location = useLocation();
    const navigate = useNavigate();
    const initialCartItems = location.state && location.state.cartItems ? location.state.cartItems : [];
    const [cartItems, setCartItems] = useState(initialCartItems);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleQuantityChange = (itemId, event) => {
        const newQuantity = parseInt(event.target.value);
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const handleCheckout = () => {
        navigate('/checkout')
    }


    // const handleCheckout = async () => {
    //     try {
    //         const response = await axios.post('/create-checkout-session', {
    //             cartItems
    //         });

    //         const sessionId = response.data.sessionId;
    //         window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    //     } catch (error) {
    //         console.error('Error creating checkout session:', error);
    //     }
    // };

    return (
        <div className="coontainer">
            <h2 className="cart-title">View Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price (per item)</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>₹{item.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e)}
                                        />
                                    </td>
                                    <td>₹{item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="total-price">Total Price: ₹{totalPrice}</p>
                    <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
                </>
            ) : (
                <p className="empty-cart">No items in the cart</p>
            )}
        </div>
    );
}

export default ViewCart;
