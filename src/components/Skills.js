import '../Styles/Skills.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGithub, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className='Skills'>
      <Navigation></Navigation>
      <div className="skills-container">
        <div className='tech-skills'>
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
        <div className='skills-animation'>
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
        <div className='soft-skills'>
          <span>My soft skills:</span>
          <table>
            <tr>
              <td>Ability to activly listen</td>
              <td>Growth Mindset</td>
              <td>Good comunication skills</td>
              <td>Creativity</td>
              <td>Open for constructive feedback</td>
            </tr>

          </table>
        </div>

      </div>
    </div>
  )
}

export default Skills;