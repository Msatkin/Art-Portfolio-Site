import React from 'react';
import ReactDOM from 'react-dom';
import InstagramLogin from 'react-instagram-login';
import './index.css';

const responseInstagram = (response) => {
  console.log(response);
}

const SignInFromInstagram = (props) => {
    return (
        <InstagramLogin
        clientId="5fd2f11482844c5eba963747a5f34556"
        buttonText="Login with Instagram"
        onSuccess={responseInstagram}
        onFailure={responseInstagram}
        cssClass="instagram-button"/>
    )
}

export default SignInFromInstagram;