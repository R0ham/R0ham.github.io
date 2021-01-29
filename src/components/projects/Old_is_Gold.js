import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

function Old_is_Gold(props) {
  const curr_id = 0;

  return (
    <div className="page_view">

      

      <div className="content">
        // <img src={data.projects[curr_id].image} alt="Project Image"/>

        // <ul className="flex_overview">
        //   <li>
        //     <h3>Context</h3>
        //     <p>School</p>
        //   </li>        
        //   <li>
        //     <h3>Makeup</h3>
        //     <p>Team</p>
        //   </li>
        //   <li>
        //     <h3>Timeframe</h3>
        //     <p>Semester</p>
        //   </li>
        //   <li>
        //     <h3>Role</h3>
        //     <p>UI / UX designer</p>
        //     <p>Engineer</p>
        //   </li>
        // </ul>

        // <div className="overview">
        //   <h1>{data.projects[curr_id].title}</h1>
        //   <p className="tagline">{data.projects[curr_id].tagline}</p>
        //   <p>Older adults (60+) have historically reported high levels of loneliness for a variety of factors, including age-related disability and living situation. Newly enacted social distancing policies designed to combat the widespread nature of COVID-19, have only exacerbated these conditions. This project seeks to establish new modes of social interaction between older adults and family/friends, within the context of the global pandemic, to help mitigate feelings of social isolation.</p>
        // </div>

        // <h2>The Prompt</h2>
        // <p>A project based on covid-19</p>

        // <h2>The Prompt</h2>
        // <p>A project based on covid-19</p>


      </div>

    </div>
  );
}
 
export default Old_is_Gold;