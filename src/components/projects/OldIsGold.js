import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function OldIsGold(props) {
  const curr_id = 0;

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {data.projects[curr_id]}
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