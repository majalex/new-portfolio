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
      <div className="about-container-first">
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
        <div className='about-animation'>
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
      <div className='about-container-second'>
        <div className='about-buttons'>
          <span>My soft skills:</span>
          <div className='skills'>
              <ul>
                <li className='li-ss'>Ability to activly listen,</li>
                <li className='li-ss'>Growth Mindset,</li>
                <li className='li-ss'>Good comunication skills,</li>
                <li className='li-ss'>Creativity,</li>
                <li className='li-ss'>Open for constructive feedback,</li>
              </ul>
            <button className='btn'>Contact Me</button>
            <button className='btn'>My projects</button>
          </div>
        </div>
        <div className='about-skills'>
          <span>My tech skills:</span>
          <table>
            <tr>
              <td>HTML/CSS</td>
              <td>JS</td>
              <td>jQuery</td>
              <td>AJAX</td>
              <td>ReactJS</td>
            </tr>
            <tr>
              <td>MongoDB</td>
              <td>Node.js</td>
              <td>SASS</td>
              <td>Bootstrap</td>
              <td>WorldPress</td>
            </tr>
            <tr>
              <td>Adobe Ilustrator</td>
              <td>GitHub</td>
              <td>Express.js</td>
              <td>GSAP</td>
            </tr>
          </table>


        </div>
      </div>

    </div>
  )
}

export default About;