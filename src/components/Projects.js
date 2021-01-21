import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero from '../images/hero_cover_red_hires.jpg'
import '../styles/App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <ul className="flex_projects">
      <Thumbnail
        link="/twitter"
        image={hero}
        title="Twitter Newsfeed"
        category="Mobile App"
      />
       
      <Thumbnail
        link="/airbnb"
        image="https://i.redd.it/atj3t9lsui631.jpg"
        title="Airbnb Experiences"
        category="Website"
      />
       
      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      />
    </ul>
  )
}
 
export default Projects;