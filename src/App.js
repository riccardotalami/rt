import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/About';
import Education from './pages/Education';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Teaching from './pages/Teaching';
import Tools from './pages/Tools'
import Work_Experience from './pages/Work_Experience';
import OTST from './pages/OTST';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/teaching' element={<Teaching />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/work_experience' element={<Work_Experience />} />
          <Route path='/otst' element={<OTST />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
