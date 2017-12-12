import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import './index.css';


const responseGoogle = (response) => {
  console.log(response);
}

const SignInFromGoogle = (props) => {
    return (
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
    )
}

export default SignInFromGoogle;