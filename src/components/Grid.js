import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component

import data from '../projects.js';
import '../styles/App.scss';
 
function Grid(props) {
  //change from "test_projects" to "projects" soon
  const grid = data.projects.map(project => (
    <Thumbnail
      key = {project.id}
      link = {project.link}
      image = {project.image}
      title = {project.title}
      tagline = {project.tagline}
    />
  ));

  return (
    // Render the homepage with completed grids
    <div className="landing">

      {/* Hero images defined in stylesheet */}
      <div className="hero"></div>

      <div className="about">
        <div className="about_text">
          <h1>Hello, my name is Roham.</h1>
          <p>I love creating meaningful, long-lasting, and usable experiences. I am an <strong>experience-builder</strong> across physical and digital media.</p>
        </div>
      </div>

      <div className="projects_grid">
        <h1>Projects</h1>
        <ul className="flex_projects">{grid}</ul>
      </div>

      <div className="gallery_grid">
        <h1>Gallery</h1>
        {/*<ul className="flex_projects">{grid}</ul>*/}
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