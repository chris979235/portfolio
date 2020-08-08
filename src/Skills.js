import React from 'react'
import {Link} from 'react-router-dom'

export default function Skills() {
  return (
    <div>
      <div class="dropdown">
        <button class="dropbtn">Navigate</button>
        <div class="dropdown-contents">
          <Link to={'./'} className='borderblack'>Home</Link>
          <Link to={'./Work'} className='borderblack'>Work</Link>
          <Link to={'./Profile'} className='borderblack'>Profile</Link>
          <Link to={'./Skills'} className='borderblack'>Skills</Link>
          <Link to={'./Contact'} className='borderblack'>Contact</Link>
        </div>
      </div>
              <h1 className='hardskills'>Hard Skills</h1>
              <ul className='listed1'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>ES6</li>
                <li>Github</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Axios</li>
                <li>Express</li>
              </ul>
                    <h1 className='softskills'>Soft Skills</h1>
                    <ul className='listed2'>
                    <li>Great Communicater</li>
                    <li>Works Well With Others</li>
                    <li>Creative</li>
                    <li>Thirst For Knowledge</li>
                    <li>Self Motivated With A Drive Like No Other</li>
                    <li>Can Lead As Well As Follow</li>
                    </ul>
    </div>
  )
}
