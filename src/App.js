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
import OTST from './pages/OTST';
import ProjectsPage from './pages/ProjectsPage';
import Academic from './pages/Academic';
import Service from './pages/Service';
import Training from './pages/Training';
import Directions from './pages/Directions';
import Active from './pages/Active';
import Previous from './pages/Previous';
import Collaborate from './pages/Collaborate';

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
          <Route path='/academic' element={<Academic />} /> 
          <Route path='/service' element={<Service />} /> 
          <Route path='/training' element={<Training />} /> 
          <Route path='/otst' element={<OTST />} />
          <Route path='/directions' element={<Directions />} />
          <Route path="/projects/:projectTitle" element={<ProjectsPage />} />
          <Route path='/active' element={<Active />} /> 
          <Route path='/previous' element={<Previous />} /> 
          <Route path='/collaborate' element={<Collaborate />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
