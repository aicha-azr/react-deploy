import React, { useRef } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        'service_1b142cg',
         'template_9733esq',
          form.current,
           'wVRK8W3sY2ehHCddr'
           )
      .then((result) => {
          console.log(result.text);
          alert('message sent');
      }, (error) => {
          console.log(error.text);
          alert('the message can\'t sent currently :(' );
      });
  };
    return(
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get in Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Send me an email. </p>
                </div>

                <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                             placeholder='Insert your name' name="user_name"/>
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input"
                             placeholder='Insert your email' name="user_email" />
                        </div>
                    </div>
                    <div className="contact__form-div">
                            <input type="text" className="contact__form-input"
                             placeholder='Insert your subject' name="from_name"/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea id="" cols="30" rows="10" className='contact__form-input'
                             placeholder='Write your message' name="message"></textarea>
                        </div>

                        <button className="btn"  type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact