import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import { Container } from 'react-bootstrap';
// retrieve the font awesome icons for social media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    
        faYoutube,
        faFacebook,
        faTwitter,
        faInstagram  } from '@fortawesome/free-brands-svg-icons'
// create the links and set the size of the icons
function SocialFollow() {
    return <div>
        <Container className="sf">
            <h3 className="text-center">Follow us on Social Media!</h3>
            <div className="singleCol">
            <a 
                href="https://www.youtube.com"
                // className="youtube social"
            >
                <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <a 
                href="https://www.facebook.com"
                // className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
            <a 
                href="https://www.twitter.com" 
                // className="twitter social"
            >
                <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
            <a 
                href="https://www.instagram.com"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>
            </div>
        </Container>
    </div>
}

export default SocialFollow;
