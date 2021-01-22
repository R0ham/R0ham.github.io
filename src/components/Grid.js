import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero from '../images/hero_cover_red_hires.jpg'

import data from '../projects.js';
import '../styles/App.scss';
 
function Grid(props) {
  //change from "test_projects" to "projects" soon
  const grid = data.test_projects.map(project => (
    <Thumbnail
      link = {project.link}
      image = {project.image}
      title = {project.title}
      tagline = {project.tagline}
    />
  ));

  return (
    // Render the completed grid
    <div>
      <h1>My name is Roham.</h1>

      <ul className="flex_projects">{grid}</ul>
    </div>

  )
}
 
export default Grid;