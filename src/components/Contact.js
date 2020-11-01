import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   {faEnvelope}  from "@fortawesome/free-solid-svg-icons";
import   {faGithub} from "@fortawesome/free-brands-svg-icons";
import   {faPhone}  from "@fortawesome/free-solid-svg-icons";
import   {faLinkedin} from "@fortawesome/free-brands-svg-icons";

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
                    <a href="https://github.com/SDubaj" target="_blank" rel="noopener noreferrer">Github</a>
                </p><br/>
                <p><FontAwesomeIcon icon={faPhone} /> +48 513 363 524</p>
                
                <p><FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/sebastian-dubaj/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
            </div>
        </Fade>
            <div className='footer'>	&copy; Sebastian Dubaj</div>
        </div>);
    }

 
export default Contact;