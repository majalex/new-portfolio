import '../Styles/Portfolio.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from "react";


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4500)
  }, [])
    return (
      <div className="Portfolio">
        <Navigation/>
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={`Portfolio`.split("")}
              idx={5}
            />
          </h1>
      </div>
    );
  }
  
  export default Portfolio;