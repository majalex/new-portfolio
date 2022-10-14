import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

const App = () => {


//=========== gsap animations ============//
  useEffect(() => {
    gsap.registerPlugin(CustomEase, CustomWiggle);
    var tl1 = gsap.timeline({repeat: -1});
    var tl2 = gsap.timeline({repeat: -1})
    CustomWiggle.create("myWiggle", {wiggles: 15, type: "easeInOut"});
//========= home page ===============//
  // hello
    tl1.to(".circle", {duration: 2, rotation: 20, ease: "myWiggle"});

  // section apear
    gsap.from(".flex-section",{xPercent: -200, duration:2, delay:2})



  // job title
    tl2.to(".title-item",{y: -50, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -100, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -150, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -100, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: -50, duration:1.5, ease:"bounce"})
    tl2.to(".title-item",{y: 0, duration:1.5, ease:"bounce"})

//========= about page ===============//
    gsap.from(".about-paragraph", {xPercent:-200, duration: 2, stagger:0.5})
    gsap.from(".about-buttons", {yPercent:300, delay:2, duration: 2, stagger:0.5})
    gsap.to(".li-ss", {color:"#ffd03e", duration: 2, stagger:0.5, delay:4, repeat:-1, yoyo:true})

    

  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
