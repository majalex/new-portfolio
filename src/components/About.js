import '../Styles/About.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from "react";


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='About'>
      <Navigation></Navigation>
      <div className="about-container">
        <div className="about-text">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={5}
            />
          </h1>
          <p className='about-paragraph'> I'm learning, and developing my skills to become a Full Stack Developer! Working for a company with lots of ambitious projects is my main goal. Job of my dreams is a place where we can create a great team working together, and friends whose constructive feedback will help me to spread my wings. </p>
          <p className='about-paragraph'>My passion for programming has been discovered erlier this year. I started a Full Stack Developer Bootcamp in June. I lerned many of the most popular technologies when it comes to proggraming. By far I consider this as one of my best decisions.</p>
        </div>
      </div>
    </div>
  )
}

export default About;