// import { Link } from 'react-router-dom'
import './css/login.css'
import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // The user is now signed in
            if (userCredential) {
                navigate('/');
            }
        } catch (error) {
            alert(error.message);
        }
    };


        const routeChange = () => {
            let path = `/signup`;
            navigate(path);
        }
    return (
        <>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form">
                            <h2 class="tiiitle">✦ LOGIN ✦</h2>
                            <div class="input-field">
                                <input
                                    className='ipemail'
                                    type="email"
                                    placeholder="Enter your Email-id"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div class="input-field">
                            <input
                                className='ipassword '
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button  className='b' type='button'  onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login