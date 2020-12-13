import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Articles from './Articles.js';
import About from './About.js';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
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

        <div className="projects">
          <h1>second_test</h1>
          <Thumbnail
            link="/portfolio/twitter"
            image="http://twitter-image-url.jpg"
            title="Twitter Newsfeed"
            category="Mobile App"
          />
           
          <Thumbnail
            link="/airbnb"
            image="http://airbnb-image-url.jpg>"
            title="Airbnb Experiences"
            category="Website"
          />
           
          <Thumbnail
            link="/photoshop"
            image="http://photoshop-image-url.jpg"
            title="Photoshop Redesign"
            category="Desktop App"
          />
        </div>

      </div>
    </BrowserRouter>
  );
}
 
export default App;