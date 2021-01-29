import React, {useState} from 'react';
import logo from '../images/logo.svg';

// Import the HashRouter, Route and Link components
import { HashRouter, Route, Link } from 'react-router-dom';
import Grid from './Grid.js';

import Old_is_Gold from './projects/Old_is_Gold.js';
import Zoom from './projects/Zoom.js';




import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';

// import DarkModeToggle from './DarkModeToggle';

import data from '../projects.js';
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
        <Route path="/oldisgold" component={Old_is_Gold} />
        <Route path="/zoom" component={Zoom} />


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