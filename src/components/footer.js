import React from 'react';
import github from '../assets/icons/GitHub.png';
import email from '../assets/icons/Email.png';
import linkedin from '../assets/icons/LinkedIn.png';

function Footer() {
    return(
        <footer>
            <h3>Contact Me</h3>
            <ul className="contact-list">
                <li>
                    <a href="https://github.com/smardones" className="contact-link">
                        <img 
                            src={github} 
                            className="contact-icon" 
                            alt="GitHub Link"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shaunmardones/" className="contact-link">
                        <img 
                            src={linkedin} 
                            className="contact-icon"
                            alt="Linkedin Link" 
                        />
                    </a>
                </li>
                <li>
                    <a href="mailto:shaun.mardones@gmail.com" className="contact-link">
                        <img 
                            src={email} 
                            className="contact-icon" 
                            alt="Click here to email Shaun"
                        />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;