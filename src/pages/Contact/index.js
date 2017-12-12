import React from 'react';
import './index.css';
import Background from '../../components/background';


const Contact = (props) => {
    return (
        <div className="Contact">
            <Background src="/contactBackground.jpg" alt="Blurry background"/>
            <div className="contact-container">
                <div className="contact-box">
                    <div className="contact-title">
                        <h1 className="">Get in contact!</h1>
                    </div>
                    <div className="contact-icons">
                        <div className="contact-icon-container">
                            <i className="fa fa-envelope fa-5x email-icon" aria-hidden="true"></i>
                            <p>Email</p>
                        </div>
                        <div className="contact-icon-container">
                            <i className="fa fa-instagram fa-5x instagram-icon" aria-hidden="true"></i>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
