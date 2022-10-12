import Navigation from './Navigation';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import programmer from '../asets/programmer.svg';
import background from '../asets/bc-g.svg';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4500)
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
              <button className='btn'>About me</button>
              <button className='btn'>Contact</button>
            </div>
          </div>
          <div className='home-vector'>
            <img src={programmer} alt="vector img" />
          </div>
          <div className='background-vector'>
            <img src={background} alt="vector img" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;