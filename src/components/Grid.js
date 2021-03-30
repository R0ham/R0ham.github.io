import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
// import hero_light from "../images/hero simple jawline light.svg";
// import hero_dark from "../images/hero simple jawline dark.svg";

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
    <div className="landing">
      <div className="hero"></div>

      <div className="about">
        <div className="about_text">
          <h1>Hello, my name is Roham.</h1>
          <p>I love creating meaningful, long-lasting, and usable experiences. I am an <strong>experience-builder</strong> across physical and digital media.</p>
        </div>
      </div>

      <div className="projects_grid">
        <ul className="flex_projects">{grid}<li></li></ul>
      </div>

      {/*
      <div className="footer">
        <p>Created from scratch with React and a lot of love.</p>
      </div>
      */}

      {/*<footer>Created with love by Roham</footer>*/}
    </div>

  )
}
 
export default Grid;