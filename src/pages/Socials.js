import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<script src="https://kit.fontawesome.com/2334c2b59b.js" crossorigin="anonymous"></script>

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_97jan3n', 'template_au856ip', e.target, 'user_3iEqxrUZkT3SQY2XiLcKj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

const Socials = () => (


    <div className="body medium-text">
        <Container>
            <h2 className="border-pink">Feel free to send me a message!</h2>
            <form className="contact-form" onSubmit={sendEmail}>
           <Row>
            
                <Col md={4} sm={12}>
                    <label className="form-label">Name</label>
                    <br/>
                    <input  className="form-input" type="text" name="name" />   
                </Col>
                <Col md={4} sm={12}>
                    <label className="form-label">Email</label>
                    <br/>
                    <input className="form-input" type="text" name="email" />  
                </Col>
                <Col md={4} sm={12}>
                    <label className="form-label">Phone Number</label>
                    <br/>
                    <input className="form-input" type="tel" name="phone" />   
                </Col>
                <Col md={12}>
                    <label className="form-label">Message</label>
                    <br />
                    <textarea className = "form-input" name="message" /> 
                </Col>
                <Col md={12}>
                    <input className="form-button" type="submit" value="Send Message" />    
                </Col>
            
                
            </Row>
            </form>
            <br/>
            <h2 className="border-pink">Or get in touch another way</h2>
            <Row>
                <Col>
                    <Row>
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faPhone} />
                        </Col>
                        <Col>
                            <p>(+44) 07471 479813</p>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </Col>
                        <Col>
                            <p>l.e.ormston@gmail.com</p>
                        </Col>
                        
                    </Row>
                    <a className= "nostyle-link" href="https://www.linkedin.com/in/louie-ormston-48810a150/" >
                    <Row>
                        
                        <Col xs={2}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Col>
                        <Col>
                            <p>Check out my LinkedIn Profile</p>
                        </Col>
                        
                    </Row>
                    </a>
                </Col>
                <Col>
                    <p>Email - l.e.ormston@gmail.com</p>
                </Col>
                <Col>
                    <p> Instagram - l.e.ormston@gmail.com </p>
                </Col>
            </Row>

            
            
        </Container>
    </div>

)

export default Socials;