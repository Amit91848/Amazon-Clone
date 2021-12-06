import React from 'react';
import '../stylesheets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                alert(err);
            })

    }

    const handleRegister = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                navigate('/');
            }).catch((err) => {
                alert(err);
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="" method="post">
                    <h5>E-mail</h5>
                    <input type="text" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <button className="login__signInButton" type="submit" onClick={handleSignIn}>Sign In</button>
                </form>

                <p>By Signing in you agree to the AMAZON FAKE clone Conditions of Use & Sale. Please see our Privacy Notice, Cookie Notice and our Interest-Based Ads Notice.</p>
                <button className="login__registerButton" onClick={handleRegister}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
