import Navigation from './Navigation';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import landingVector from '../asets/landingVector.svg'

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
        <div className='bg-c'></div>
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
                <div className='title-item'>Frontend:</div>
                <div className='title-item'>Backend:</div>
                <div className='title-item'>Fullstack:</div>
              </div>
              <span className='job-title'>Web developer</span>
            </div>
            <div className='home-buttons'>
              <button className='btn'>About me</button>
              <button className='btn'>Contact</button>
            </div>
          </div>

          <div className='home-vector'>
            <img src={landingVector} alt="vector img" className='vector'/>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;