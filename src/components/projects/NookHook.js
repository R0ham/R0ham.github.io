import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';
import Quote from '../modal/Quote.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function NookHook(props) {
  const curr_id = 3;
  const proj = data.projects[curr_id];
  const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {proj}
        />

        <h2>Brainstorming</h2>
        <ImageGridHorizontal
          images = {imgs.brainstorming}
        />


        <h2>thumbnail</h2>
        <ImageGridHorizontal
          images = {imgs.thumbnail}
        />


        <h2>pinup</h2>
        <ImageGridHorizontal
          images = {imgs.pinup}
        />

        <h2>Prototype</h2>
        <ImageGridVertical
          images = {imgs.prototype}
        />

        <h2>Outcome</h2>
        <ImageGridVertical
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>




      </div>

    </div>
  );
}
 
export default NookHook;