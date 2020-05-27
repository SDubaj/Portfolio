import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faEnvelope}  from "@fortawesome/free-solid-svg-icons";
import   {faGithub} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    
        return (  
        <div className="Contact">
            <div className="heading">
                    <Slide right > Kontakt.<hr/></Slide>
            </div>
        <Fade bottom>
            <div className='contact-content'>
                <p><FontAwesomeIcon icon={faEnvelope} /> DubajSebastian96@gmail.com</p>
                <p><FontAwesomeIcon icon={faGithub} />
                    <a href="https://github.com/SDubaj" target="_blank" rel="noopener noreferrer">github.com/SDubaj</a>
                </p>
            </div>
        </Fade>
            <div className='footer'>	&copy; Sebastian Dubaj</div>
        </div>);
    }

 
export default Contact;