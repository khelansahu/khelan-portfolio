import React from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d88fa178-c3f8-4f43-b947-eb0cc52b2aa4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         alert(res.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
<div className="contact-title">
    <h1>Get in touch</h1>
</div>
<div className="contact-section">
    <div className="contact-left">
        <h1>Lets talk</h1>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
        <div className="contact-details">
            <div className="contact-detail">
            <IoMdMail /><p>khelansahu9584@gmail.com</p>
            </div>
            <div className="contact-detail">
            <IoCall /><p>6264542516</p>
            </div>
            <div className="contact-detail">
            <FaLocationDot /><p>Begumpet, Hyderabad</p>
            </div>
        </div>
    </div>
    <form onSubmit={onSubmit}  className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' />
        <label htmlFor="">Write your massage here</label>
        <textarea name="message" id="8" placeholder='Enter your message'></textarea>
        <button className="contact-submit">Submit now</button>
    </form>
</div>
    </div>
  )
}

export default Contact