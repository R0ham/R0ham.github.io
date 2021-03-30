import React from 'react';
// import logo from '../images/logo.svg';

// Import the HashRouter, Route and Link components
import { HashRouter, Route } from 'react-router-dom';
import Grid from './Grid.js';

import OldIsGold from './projects/OldIsGold.js';
import Zoom from './projects/Zoom.js';
import Degreezy from './projects/Degreezy.js';
import NookHook from './projects/NookHook.js';
import PushPin from './projects/PushPin.js';
import Magnet from './projects/Magnet.js';

import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

// import DarkModeToggle from './DarkModeToggle';

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
    <HashRouter>
      <div className="navbar">
        <DarkModeToggle
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={60}
        />
      </div>


      <div className="App">
        <Route exact path="/" component={Grid} />
        <Route path="/oldisgold" component={OldIsGold} />
        <Route path="/zoom" component={Zoom} />
        <Route path="/degreezy" component={Degreezy} />
        <Route path="/nookhook" component={NookHook} />
        <Route path="/pushpin" component={PushPin} />
        <Route path="/magnet" component={Magnet} />


        {/* Set up the Router
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        */}

        {/*
        <div className="navigation">
          // <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">

            // Set up the Links
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>

          </div>
        </div>
        */}

      </div>
    </HashRouter>
  );
}
 
export default App;