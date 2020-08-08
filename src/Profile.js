import React from 'react'
import {Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div>
         <div className="dropdown">
        <button className="dropbtn">Navigate</button>
          <div className="dropdown-contents">
            <Link to={'./'} className='borderblack'>Home</Link>
            <Link to={'./Work'} className='borderblack'>Work</Link>
            <Link to={'./Profile'} className='borderblack'>Profile</Link>
            <Link to={'./Skills'} className='borderblack'>Skills</Link>
            <Link to={'./Contact'} className='borderblack'>Contact</Link>
          </div>
      </div>

          <div className='profile'>
            <h4>Hi let me tell you a little about myself</h4>
            <p>To start off I am a disabled vet</p>
            <p>And as it turns out getting injured during my time in the army was a blessing in disguise</p>
            <p>It led me to the wonderful world of coding, my life was forever changed when I found it, I have developed a deep and burning passion for code</p>
            <p>Coming across a difficult to solve problem, and overcoming it, leaves me with a feeling of satisfaction that I have never felt before I started coding</p>
            <p>All I want to do is find a difficult challenge then overcome it</p>
            <p>I am dedicated, motivated, and driven to always improve upon myself and upon my coding skills</p>
          </div>
    </div>
  )
}
