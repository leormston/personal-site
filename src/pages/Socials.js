import React from 'react';
import {Container} from 'react-bootstrap';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';


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
            <p>Louie just put ur socials here and the ability to send emails to ur email.</p>
            <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="text" name="email" />
            <label>Phone Number</label>
            <input type="tel" name="phone" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
        </Container>
    </div>

)

export default Socials;