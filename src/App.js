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

        <div className="projects">
          <h1>test</h1>
          <Thumbnail
            link="/twitter"
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