import React from 'react'
import './Footer.css'
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
               <h3>KHELAN SAHU</h3>
               <p>I am a full stack developer, i am passout in 2024 in computer science background</p>
            </div>
            <div className='footer-top-right'>
                <div className="footer-email-input">
                <FaUser />
                <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscriber">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                @ 2025 Khelan sahu. All rights reserved.
            </div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer