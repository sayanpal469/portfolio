import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e4t9ty5', 'template_t5zo4rq', form.current, 'OqUGDjEGRpEcEuQs7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast("Message Sent Successfully");
      e.target.reset();
  };


    return (
        <section id="contact">
        <ToastContainer></ToastContainer>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
  
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className="contact__option__icon"></MdOutlineMail>
              <h4>Email</h4>
              <p>sayanpal469@gmail.com</p>
              <a href="mailto:sayanpal469@gmail.com" target={"_blank"}>
                Send a mail
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option__icon"></RiMessengerLine>
              <h4>Messenger</h4>
              <p>Sayan Paul</p>
              <a href="https://www.facebook.com/sayan.pal.1650/" target={"_blank"}>
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option__icon"></BsWhatsapp>
              <h4>WhatsApp</h4>
              <p>+91 7872358979</p>
              <a
                href="https://wa.me/+917872358979"
                target={"_blank"}
              >
                Send a message
              </a>
            </article>
          </div>
  
          <form ref={form} action="" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
};

export default Contact;