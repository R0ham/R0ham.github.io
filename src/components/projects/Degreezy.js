import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function Degreezy(props) {
  const curr_id = 2;

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {data.projects[curr_id]}
        />

        {/* REVISE overview paragraph */}
        {/* CONSIDER adding a new template project file */}


        <h2>Problem</h2>
        <p></p>

        <h2>Technologies Used</h2>
        <p>The MEAN stack was used - MongoDB (database), Express (HTTP requests), Angular, and Node.</p>
        <ul>
          <li>Frontend</li>
          <ul>
            <li>Dragula - Drag and Drop functionality</li>
            <li>Bootstrap - CSS framework</li>
          </ul>
          <li>Backend</li>
          <ul>
            <li>Typescript - type syntax for Javascript</li>
            <li>BodyParser - parsing HTTP request body</li>
            <li>Mongoose - database schemas</li>
            <li>Passport - authentication</li>
          </ul>
        </ul>

        <h2>Key Features</h2>


        <h2>Mockups</h2>
        {/* on google docs version of project proposal */}



        <h2>Database Schema</h2>


        <h2>Prototype</h2>


        <h2>Implementing Changes</h2>
        {/* google slides - how has degreezy changed */}


        <h2>Outcome</h2>



        <h2>Reflection</h2>



        <h2>Future State</h2>
        <h3>Business Model</h3>
        <h3>Additional Features</h3>





      </div>

    </div>
  );
}
 
export default Degreezy;