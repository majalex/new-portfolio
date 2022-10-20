import '../Styles/Home.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from 'react';
import programmer from '../assets/programmer.svg';
import background from '../assets/bc-g.svg';
import background2 from '../assets/bc-g-s.svg';
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4500)

    gsap.registerPlugin(CustomEase, CustomWiggle);
    var tl1 = gsap.timeline({repeat: -1});
    var tl2 = gsap.timeline({repeat: -1})
    CustomWiggle.create("myWiggle", {wiggles: 15, type: "easeInOut"});
    tl1.to(".circle", {duration: 2, rotation: 20, ease: "myWiggle"});
    gsap.from(".flex-section",{xPercent: -200, duration:2, delay:2})
    tl2.to(".title-item",{y: -50, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -100, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -150, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -100, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -50, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: 0, duration:1.5, ease:"bounce"})
    
  }, [])


  return (
    <div className="Home">
      <Navigation />
      <>
        <div className='home-container'>
          <div className='header-section'>
            <div className='circle-container'>
              <div className='circle'>Hello!</div>
            </div>
            <div className='header-one'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`My name is`.split("")}
                idx={1}
              />
            </div>
            <div className='header-two'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`Aleksander Maj`.split("")}
                idx={11}
              />
            </div>
            <div className='header-three'>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`and I'm`.split("")}
                idx={25}
              />
            </div>
            <div className='flex-section'>
              <div className='job-titles'>
                <div className='title-item'>Fullstack:</div>
                <div className='title-item'>Frontend:</div>
                <div className='title-item'>Backend:</div>
                <div className='title-item'>UX/UI:</div>
              </div>
              <span className='job-title'>developer</span>
            </div>
            <div className='home-buttons'>
            <NavLink to="/about"><button className='btn'>About me</button></NavLink>
            <NavLink to="/contact"><button className='btn'>Contact</button></NavLink>
            </div>
          </div>
          <div className='home-vector'>
            <img src={programmer} alt="vector img" />
          </div>
          <div className='background-vector'>
            <img src={background} alt="vector img" />
          </div>
          <div className='background-vector2'>
            <img src={background2} alt="vector img2" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;