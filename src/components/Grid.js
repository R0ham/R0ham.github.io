import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero from '../images/hero_cover_red_hires.jpg'

import data from '../projects.js';
import '../styles/App.css';
 
function Grid(props) {
  //change from "test_projects" to "projects" soon
  const grid = data.test_projects.map(project => (
    <Thumbnail
      link = {project.link}
      image = {project.image}
      title = {project.title}
      category = {project.category}
    />
  ));

  return (
    // Render the completed grid
    <ul className="flex_projects">{grid}</ul>

  )
}
 
export default Grid;