import '../Styles/Portfolio.scss';
import Navigation from './Navigation';
import AnimatedLetters from './Functionalities/AnimatedLetters';
import { useEffect, useState } from 'react';
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { gsap } from "gsap";

const links = [
  {
    linkDemo: 'https://postapp.fun/posts',
    linkGit: 'https://github.com/majalex/PostApp',
    img: img1
  },
  {
    linkDemo: 'https://majalex.github.io/projekt-spa/',
    linkGit: 'https://github.com/majalex/projekt-spa',
    img: img2
  },
  {
    linkDemo: 'https://majalex.github.io/mm-site/',
    linkGit: 'https://github.com/majalex/mm-site',
    img: img3
  },
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    document.body.style.backgroundColor = "#ffd03e"
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 1500)
    gsap.from(".product-container", { yPercent: 200, stagger: 0.1, duration: 2 })
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [])

  const Project = () => (
    links.map((item, index) => (
      <div className='product-container' key={index}>
        <div className='product-box'>
          <div className='browser-element'>
            <div className='browser-crircle'></div>
            <div className='browser-crircle'></div>
            <div className='browser-crircle'></div>
          </div>
          <img src={item.img} alt="" className='p-img' />
        </div>
        <a href={item.linkDemo} target="_blank" rel='noreferrer'><button className='btn'>Demo</button></a>
        <a href={item.linkGit} target="_blank" rel='noreferrer'><button className='btn'>Code</button></a>
      </div>
    ))
  );

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
          <Project />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;