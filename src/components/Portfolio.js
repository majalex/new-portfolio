import '../Styles/Portfolio.scss';
import Navigation from './Navigation';
import AnimatedLetters from './AnimatedLetters';
import { useEffect, useState } from 'react';
import img1 from "../asets/1.png";
import img2 from "../asets/2.png";
import img3 from "../asets/3.png";


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    document.body.style.backgroundColor = "#ffd03e"
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (

    <div className='Portfolio'>
      <Navigation></Navigation>
      <div className='portfolio-container'>
        <div className='text-zone'>
          <h1 className='page-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={1}
            />
          </h1>
        </div>
        <div className='projects'>
          <div className='product-container'>
            <div className='product-box'>
              <div className='browser-element'>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
              </div>
              <img src={img3} alt="" className='p-img' />
            </div>
            <a href={"https://majalex.github.io/mm-site/"} target="_blank" rel='noreferrer'><button className='btn'>Demo</button></a>
            <a href={"https://github.com/majalex/mm-site"} target="_blank" rel='noreferrer'><button className='btn'>Code</button></a>
          </div>
          <div className='product-container'>
            <div className='product-box'>
              <div className='browser-element'>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
              </div>
              <img src={img2} alt="" className='p-img' />
            </div>
            <a href={"https://majalex.github.io/projekt-spa/"} target="_blank" rel='noreferrer'><button className='btn'>Demo</button></a>
            <a href={"https://github.com/majalex/projekt-spa"} target="_blank" rel='noreferrer'><button className='btn'>Code</button></a>
          </div>
          <div className='product-container'>
            <div className='product-box'>
              <div className='browser-element'>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
                <div className='browser-crircle'></div>
              </div>
              <img src={img1} alt="" className='p-img' />
            </div>
            <a href={"https://majalex.github.io/bootstrap-project-/"} target="_blank" rel='noreferrer'><button className='btn'>Demo</button></a>
            <a href={"https://github.com/majalex/bootstrap-project-"} target="_blank" rel='noreferrer'><button className='btn'>Code</button></a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Portfolio;