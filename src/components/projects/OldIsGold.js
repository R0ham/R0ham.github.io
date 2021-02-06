import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

function OldIsGold(props) {
  const curr_id = 0;

  return (
    <div className="page_view">

      <BackBar/>

      <div className="content">

        <Overview
          image = {data.projects[curr_id].image}
          alt = {data.projects[curr_id].title}
          tagline = {data.projects[curr_id].tagline}

          context = {data.projects[curr_id].context}
          org = {data.projects[curr_id].org}
          timeframe = {data.projects[curr_id].timeframe}
          role = {data.projects[curr_id].role}

          overview = {data.projects[curr_id].overview}
        />

        {/*<h2>The Prompt</h2>
        <p>A project based on covid-19</p>

        <h2>The Prompt</h2>
        <p>A project based on covid-19</p>*/}

      </div>

    </div>
  );
}
 
export default OldIsGold;