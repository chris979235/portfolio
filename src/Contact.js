import React from 'react'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target,4444);
    emailjs.sendForm('gmail', 'template_3Ie4NQ5O', e.target, 'user_NKM17MrLSjdc60o30cYtb')
    .then((result) => {
        if(alert('You message was sent!')){}
        else    window.location.reload(); 
  }, (error) => {
      console.log(error.text);
  });
  }

  return (
    <div>
        <div className="formcontainer" >
        
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

      <div className='messageme'>Message Me</div>
          <form className="formcontainer1" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Name' className='name'/>
            <input type="phone" name="contact_number" placeholder='Phone' className='phone'/>
            <input type="email" name="user_email" placeholder="Email" className='email'/>
            <textarea name="message" placeholder='Message'className='message'/>
            <input type="submit" value="Send" className='input'/>
          </form>
        </div>
     
    </div>
  )
}
