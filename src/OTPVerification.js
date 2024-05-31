// OTPVerification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/otp.css'

const OTPVerification = () => {
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        // Implement OTP verification logic
        // Check if the entered OTP is correct
        const isOTPValid = true; // Placeholder, implement your OTP verification logic
        if (isOTPValid) {
            // Navigate to homepage if OTP is valid
            navigate('/');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="container">
            <p className='otp'>✦ Enter OTP ✦</p> 
            <form onSubmit={handleVerifyOTP}>
                <input
                    type="text"
                    value={otp}
                    className='tp'
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="Enter your OTP"/> <br/>
                <button className='ot' type="submit">Done</button>
            </form>
        </div>
    );
};

export default OTPVerification;