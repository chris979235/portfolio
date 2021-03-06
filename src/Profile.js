import React from 'react'
import {Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div>
         <div className="dropdown">
        <button className="dropbtn">Menu</button>
          <div className="dropdown-contents">
            <Link to={'./'} className='borderblack'>Home</Link>
            <Link to={'./Work'} className='borderblack'>Work</Link>
            <Link to={'./Profile'} className='borderblack'>Profile</Link>
            <Link to={'./Contact'} className='borderblack'>Contact</Link>
          </div>
      </div>
          <div className='gridin2'>
            <div className='profile'>
              <h4>Hi let me tell you a little about myself</h4>
              <p>To start off I am a disabled vet</p>
              <p>And as it turns out getting injured during my time in the army was a blessing in disguise</p>
              <p>It led me to the wonderful world of coding, my life was forever changed when I found it, I have developed a deep and burning passion for code</p>
              <p>Coming across a difficult to solve problem, and overcoming it, leaves me with a feeling of satisfaction that I have never felt before I started coding</p>
              <p>All I want to do is find a difficult challenge then overcome it</p>
              <p>I am dedicated, motivated, and driven to always improve upon myself and upon my coding skills</p>
            </div>
              <div className='contained2'>
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
                </div>

                    <div className='contained3'>
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
            </div>
    </div>
  )
}
