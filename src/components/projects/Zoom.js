import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function Zoom(props) {
  const curr_id = 1;

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

      </div>

    </div>
  );
}
 
export default Zoom;