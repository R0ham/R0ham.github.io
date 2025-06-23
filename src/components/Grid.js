import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import { MyImg } from './GalleryThumbnail.js';

import data from '../projects.js';
import '../styles/App.scss';
 
function Grid(props) {
  //change from "test_projects" to "projects" soon
  const test_grid = data.test_projects.map(project => (
    <Thumbnail
      key = {project.id}
      link = {project.link}
      image = {project.image}
      title = {project.title}
      tagline = {project.tagline}
    />
  ));

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
          <h1>Hello! My name is Roham.</h1>
          <p>I am a creative thinker, with strong visual and technical skills. I recently wrote a short story, enjoyed paddle boarding for the first time, and continue to be an avid biker. I love learning new things and by doing so, I challenge myself to continuously grow. I’m also passionate and driven, and will proactively find opportunity areas I want to participate in. I thrive most in freeform environments within closely working teams.</p>
        </div>
      </div>

      <div className="projects_grid">
        <h1>Projects</h1>
        <ul className="flex_projects">{grid}</ul>
      </div>

      <div className="gallery_grid">
        <h2>Gallery</h2>
        <MyImg/>
        <ul className="flex_gallery">{test_grid}</ul>
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