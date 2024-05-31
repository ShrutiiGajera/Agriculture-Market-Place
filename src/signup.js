import './css/signup.css';
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { generateOTP } from './Utils/otp';
import { sendOTPEmail } from './Utils/email';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (userCredential) {
                // Generate OTP
                const otp = generateOTP();

                // Send OTP via email
                await sendOTPEmail(email, otp);

                // Navigate to OTP verification screen
                navigate('/verify-otp');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form" onSubmit={handleSignup}>
                        <h2 className="tiitle">✦ SIGN UP ✦</h2>
                        <div className="input-field">
                            <input
                                className='ipemail'
                                type="email"
                                placeholder="Enter your Email-id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <input
                                className='ipassword'
                                type="password"
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='b' type="submit">SEND OTP</button>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default Signup;