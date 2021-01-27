import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero_light from "../images/hero simple jawline light.svg";
import hero_dark from "../images/hero simple jawline dark.svg";

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

        <div className="hero"></div>






        <h1>My name is Roham.</h1>
      </div>

      <ul className="flex_projects">{grid}</ul>
    </div>

  )
}
 
export default Grid;