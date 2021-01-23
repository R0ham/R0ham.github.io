import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero from '../images/hero_cover_red_hires.jpg'

import data from '../projects.js';
import '../styles/App.scss';
 
function Grid(props) {
  //change from "test_projects" to "projects" soon
  const grid = data.projects.map(project => (
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
      <div className="landing">
        {/*<h1>Designer. Developer.</h1>*/}
        <h1>My name is Roham.</h1>
      </div>

      <ul className="flex_projects">{grid}</ul>
    </div>

  )
}
 
export default Grid;