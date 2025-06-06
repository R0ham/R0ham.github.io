import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function PushPin(props) {
  const curr_id = 4;

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {data.projects[curr_id]}
        />

      </div>

    </div>
  );
}
 
export default PushPin;