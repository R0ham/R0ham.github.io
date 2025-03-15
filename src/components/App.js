import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from './Grid.js';

import OldIsGold from './projects/OldIsGold.js';
import Zoom from './projects/Zoom.js';
import Degreezy from './projects/Degreezy.js';
import NookHook from './projects/NookHook.js';
import PushPin from './projects/PushPin.js';
import Magnet from './projects/Magnet.js';

import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

// import data from '../projects.js';
import '../styles/App.scss';
 
function App() {
  const darkMode = useDarkMode(false);

  // const paths = data.test_projects.map(project => (
  //   <Route
  //     path = {project.link}
  //     component = {project.component}
  //   />
  // ));

  return (
    <BrowserRouter>
      <div className="navbar">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={60}
        />
      </div>

      <div className="App">
        <Routes>
          {/* Grid element makes up homepage */}
          <Route path="/" element={<Grid />} />

          <Route path="/oldisgold" element={<OldIsGold />} />
          <Route path="/zoom" element={<Zoom />} />
          <Route path="/degreezy" element={<Degreezy />} />
          <Route path="/nookhook" element={<NookHook />} />
          <Route path="/pushpin" element={<PushPin />} />
          <Route path="/magnet" element={<Magnet />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
 
export default App;