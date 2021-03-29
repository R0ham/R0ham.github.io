import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';

import data from '../../projects.js';
import '../../styles/App.scss';

import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

function Magnet(props) {
  const curr_id = 5;

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          image = {data.projects[curr_id].image}
          title = {data.projects[curr_id].title}
          tagline = {data.projects[curr_id].tagline}

          context = {data.projects[curr_id].context}
          org = {data.projects[curr_id].org}
          timeframe = {data.projects[curr_id].timeframe}
          role = {data.projects[curr_id].role}

          overview = {data.projects[curr_id].overview}
        />

        <h2>The Prompt</h2>
        <p>{data.projects[curr_id].prompt}</p>

        <h2>Focus Area</h2>
        <p>{data.projects[curr_id].focus}</p>

        {/*<ImageGridHorizontal
          image1 = {data.projects[curr_id].image_f1}
          alt1 = {data.projects[curr_id].imagealt_f1}

          image2 = {data.projects[curr_id].image_f2}
          alt2 = {data.projects[curr_id].imagealt_f2}
        />*/}

        <ImageGridHorizontal
          images = {data.projects[curr_id].images[0].focus1}
        />

        <h2>Process</h2>
        <p>{data.projects[curr_id].process}</p>

        <ImageGridHorizontal
          images = {data.projects[curr_id].images[0].process1}
        />

        <h2>Outcome</h2>
        <p>{data.projects[curr_id].outcome}</p>

        <ImageGridVertical
          images = {data.projects[curr_id].images[0].outcome1}
        />

        <h2>Reflection</h2>
        <p>{data.projects[curr_id].reflection}</p>

      </div>

    </div>
  );
}
 
export default Magnet;