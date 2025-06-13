import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        {/* profile image */}
        <img src={profile} alt="" />
        <h1><span>I'am khelan sahu,</span> Full Stack Developer based in India.</h1>
        <p>Strong fundamentals on Java(Core + J2EE), SQL, React.js, and working with framwork like Spring Boot , Hibernate .  Eager to apply my problem-solving and coding skills in a collaborative development environment.</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
                
            </div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1G7dfhGp0PbpoIhUsiogVhWCwWKwFqwdC/view?usp=sharing">My resume</a> </div>
        </div>
    </div>
  )
}

export default Hero