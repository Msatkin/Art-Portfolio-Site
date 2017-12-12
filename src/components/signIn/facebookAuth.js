import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './index.css';

const responseFacebook = (response) => {
  console.log(response);
}

const SignInFromFacebook = (props) => {
    return (
        <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email"
        size="small"
        cssClass="facebook-button"
        callback={responseFacebook} />
    )
}

export default SignInFromFacebook;