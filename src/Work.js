import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import computer from './images/computer.jpeg'
import pokemon from './images/pokemon.png'
import meade from './images/meade.png'
export default function Work() {
           
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 1000 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 1
    }
  };
 


  return (
    <div>
      <h1 className='mywork'>My Work</h1>
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
    <Carousel responsive={responsive}>
    <a target="blank" href="https://github.com/chris979235/vschool">
      <img src={pokemon} className="github" alt="github" className='image1'></img>
      <p className='slidertext'>A front end app where you choose a pokemon and battle against others, 
      weakening enemy pokemon enables thier capture and adds them to your list of pokemon to use.
      <br></br>
      <br></br>
      Utilizes React JS CSS HTML
      </p>
    </a>
    <a target="blank" href="https://github.com/chris979235/vschool">
      <img src={meade} className="github" alt="github" className='image2'></img>
      <p className='slidertext'>Having any plumbing issues? Come check out Meade Plumbling LLC today!
      <br></br>
      <br></br>
      A front end built website I created for Meade Plumbing LLC. 
      <br></br>
      <br></br>
      Utilizes HTML CSS JS Email.JS
       </p>
    </a>
    <a target="blank" href="https://github.com/chris979235/vschool">
      <img src={computer} className="github" alt="github" className='image3'></img>
    </a>
    <a target="blank" href="https://github.com/chris979235/vschool">
      <img src={computer} className="github" alt="github" className='image4'></img>
    </a>
  </Carousel>
    </div>
  )
}


