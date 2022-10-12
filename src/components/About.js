import Navigation from './Navigation';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";


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
      <div className="container-about">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I'm developing my skills to become Full Stack Developer! Getting a job as a developer is the main goal for me at the moment.</p>
          <p>I discovered my passion for programming this year, and I started a Full Stack Developer Bootcamp in June. By far I consider this as one of my best decisions.</p>
          <p>I have worked in administration previously, but wasn't happy about it. I decided to change my career paths.</p>

          
          <div className='skills-container'>
            <div className='skills'>
              <span>My soft skills</span>
              <ul>
                <li>Ability to activly listen</li>
                <li>Growth Mindset</li>
                <li>Good comunication skills</li>
                <li>Creativity</li>
                <li>Open for constructive feedback</li>
              </ul>
            </div>
            <div className='skills'>
            <span>My tech skills</span>
            <ul>
              <li>HTML/CSS</li>
              <li>JS</li>
              <li>jQuery</li>
              <li>AJAX</li>
              <li>ReactJS</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>WorldPress</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>GSAP</li>
              <li>Adobe Ilustrator</li>
            </ul>
          </div>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;