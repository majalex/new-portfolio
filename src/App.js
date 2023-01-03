import React from "react";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

import Skills from './components/Skills';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
