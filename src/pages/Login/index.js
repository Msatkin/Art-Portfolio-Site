import React from 'react';
import './index.css';
import SignInFromGoogle from '../../components/signIn/googleAuth';
import SignInFromInstagram from '../../components/signIn/instagramAuth';
import SignInFromFacebook from '../../components/signIn/facebookAuth';
import Background from '../../components/background';

const Login = (props) => {
    return (
        <div className="Login">
            <Background src="/waves.jpg" alt="Blurry waves"/>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-title">
                        <h2>Login</h2>
                    </div> 
                    <div className="login-button">
                        <SignInFromGoogle/>
                    </div>    
                    <div className="login-button">
                        <SignInFromInstagram/>
                    </div>
                    <div className="login-button">
                        <SignInFromFacebook/>
                    </div> 
                </div>
            </div>
        </div>
    );
}

const responseGoogle = (response) => {
    console.log(response)
}


export default Login;