import '../Styles/About.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from "react";
import photo from '../asets/project.jpeg';
import { gsap } from "gsap";


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    gsap.from(".about-paragraph", { xPercent: -200, duration: 2, stagger: 0.5 })
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
          <p className='about-paragraph'>I discovered my passion for programming earlier this year. In June I started a Full Stack Developer Bootcamp, where I learned many of the most popular technologies when it comes to programming.</p>
          <p className='about-paragraph'>My previous work experience was a job in the administration sector. I was an assistant at the notary office and was responsible for creating various document projects.</p>
          <p className='about-paragraph'> I'm hungry for knowledge, and I'm developing my skills to become a Full Stack Developer! My main goal is to work in a place with a lot of ambitious projects. I would love to work in a team so I can get some constructive feedback and tips. As a junior developer, I consider this to be very useful.</p>
        </div>
        <div className='photo-container'>
          <img src={photo} alt="img" />
          <div className='buttons'>
            <button className='btn'>My skills</button>
            <button className='btn'>My portfolio</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About;