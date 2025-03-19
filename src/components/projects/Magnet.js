import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function Magnet(props) {
  const curr_id = 5;
  const proj = data.projects[curr_id];
  const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {proj}
        />

        <h2>Prompt</h2>
        <p>{proj.prompt}</p>

        <h2>Focus Area</h2>
        <p>{proj.focus}</p>

        <ImageGridHorizontal
          images = {imgs.focus1}
        />

        <h2>Process</h2>
        <p>{proj.process}</p>

        <ImageGridHorizontal
          images = {imgs.process1}
        />

        <h2>Outcome</h2>
        <p>{proj.outcome}</p>

        <ImageGridVertical
          images = {imgs.outcome1}
        />

        <h2>Reflection</h2>
        <p>{proj.reflection}</p>

      </div>

    </div>
  );
}
 
export default Magnet;