import React from 'react';
import logo from '../images/logo.svg';
// Import the HashRouter, Route and Link components
import { HashRouter, Route, Link } from 'react-router-dom';
import Grid from './Grid.js';
import Articles from './Articles.js';
import Modal from './Modal.js';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

import data from '../projects.js';
import '../styles/App.css';
 
function App() {
  return (
    <HashRouter>
      <div className="App">
  
        <h1>My name is Roham.</h1>

        <Route exact path="/" component={Grid} />
        <Route path="/one" component={Modal} />
        <Route path="/two" component={Modal} />
        <Route path="/three" component={Modal} />


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