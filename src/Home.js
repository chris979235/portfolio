import React from 'react'
import {Link} from 'react-router-dom'
import linked from "./images/linkedin.png"
import email from "./images/email.png"
import github from "./images/github.png"
import Resume from './images/Resume5.jpg'
export default function home() {
  return (
   <>
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-contents">
        <Link to={'./'} className='borderblack'>Home</Link>
        <Link to={'./Work'} className='borderblack'>Work</Link>
        <Link to={'./Profile'} className='borderblack'>Profile</Link>
        <Link to={'./Contact'} className='borderblack'>Contact</Link>
      </div>
    </div>
    
        <h1 className="text1">Christopher Rees </h1>
        <h1 className='text2'>Front End Web Developer </h1>
            <Link to={'./Work'} className='link1'>CHECK OUT MY PROJECTS</Link>
            <Link to={'./Profile'} className='link2' >VIEW MY PROFILE</Link>
            <a target='blank' href={Resume} className='link3'>MY RESUME  </a>
            <div className="footer">
              <a target="blank" href="https://linkedin.com/in/christopher-rees-599055126">
              <img src={linked} className="linkedin" alt="linkedin"></img>
              </a>
              <a target="blank" href="mailto:crees979gmail.com">
              <img src={email} className="emailed" alt="email"></img>
              </a>
              <a target="blank" href="https://github.com/chris979235">
              <img src={github} className="github" alt="github"></img>
              </a>
            </div>
              
   </>
  )
}
