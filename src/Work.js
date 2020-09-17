import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import computer from './images/computer.jpeg'
import pokemon from './images/pokemon.png'
import meade from './images/meade.png'
import topical from'./images/topical.png'
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
        <button className="dropbtn">Menu</button>
          <div className="dropdown-contents">
            <Link to={'./'} className='borderblack'>Home</Link>
            <Link to={'./Work'} className='borderblack'>Work</Link>
            <Link to={'./Profile'} className='borderblack'>Profile</Link>
            <Link to={'./Contact'} className='borderblack'>Contact</Link>
          </div>
      </div>
    <Carousel responsive={responsive}>
    {/* <a target="blank" href="http://topical-roulette-app.herokuapp.com/" className='anchor'> */}
      {/* <img src={topical} className="github" alt="github" className='image3'></img> */}
      <div>
      <iframe
        className='image3'
        src='http://topical-roulette-app.herokuapp.com/'>
      </iframe>
      <a target='blank' href='https://github.com/cameronrasmo/topical-twitter-repo' className='slidertext'>
      <p className='slidertext'>A frontend and backend website created in an imitation of twitter
      <br></br>
      Group Project made in colaberation with Amron Miller, Cameron Rasmussen and Kela Bernesser
      <br></br>
      Utilizes React JS CSS HTML Morgan Mongoose MongoDB
      </p>
      </a>
        </div>
    {/* </a> */}

    {/* <a target="blank" href="http://pokemonbattle.surge.sh/" className='anchor'> */}
      {/* <img src={pokemon} className="github" alt="github" className='image1'></img> */}
      <div>

      <iframe
      className='image1'
      src='http://pokemonbattle.surge.sh/'
      >
      </iframe>
      <a target='blank' href='https://github.com/chris979235/goingoveragain/tree/master/module4/capturePokemon' className='slidertext'>
      <p className='slidertext'>A front end app where you choose a pokemon and battle against others, 
      weakening enemy pokemon enables you able to capture them and add to your list of pokemon to use.
      <br></br>
      <br></br>
      Utilizes React JS CSS HTML
      </p>
      </a>
    {/* </a> */}
      </div>
    <a target="blank" href="https://github.com/chris979235/MeadePlumbing" className='anchor'>
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
    <a target="blank" href="https://github.com/chris979235/vschool" className='anchor'>
      <img src={computer} className="github" alt="github" className='image4'></img>
    </a>
  </Carousel>
    </div>
  )
}


