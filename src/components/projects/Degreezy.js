import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';
import Quote from '../modal/Quote.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function Degreezy(props) {
  const curr_id = 2;
  const proj = data.projects[curr_id];
  const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {proj}
        />

        {/* REVISE overview paragraph */}
        {/* CONSIDER adding a new template project file */}


        <h2>Problem</h2>
        <p>College is a period of uncertainty, freedom, and growth. You don't start planning and you don't know what you are going to achieve. lots of stumbling around, then near the end of your collegiate career suddenly you have to think about which courses you still need to graduate, how many credits you have left to fill etc. it becomes a headache to think about and manage. your advisors try their best to help you, but its usually a reactive process, after you're already a few years in and have already taken a bunch of seemingly unrelated classes. what if there was an easier way to keep track of the courses you're taking, understand what requirements you've already fulfilled, and which ones you still need to. And what if it helped during your conversations with your advisor and you both had the same source of truth? This is a degree scheduler that helps you visualize your degree progress, helps you decide and shoot for classes you want to take, and helps you figure out how many semesters it would take for you to graduate.</p>

        <h2>Competitive Analysis</h2>
        <p>Plenty of solutions exist for managing your degree and planning your graduation timeline, but these interfaces are often clunky, difficult to use, and don't automatically incorporate your school's specific course requirements, especially for dual majors. Because of these difficulties, even though students may have access to these expensive enterprise tools, they frequently go underutilized.</p>

        <h2>Value Proposition</h2>
        <h3>Goal</h3>
        <p>Develop a simple-to-use interface, with automatic reconciling of prerequisite and corequisite requirements. Enable flexibility, a planning mindset, and enable conversations with faculty advisors.</p>

        <h3>Key Features</h3>
        <ul>
          <li>User accounts</li>
          <li>Semester view</li>
          <li>Search for courses from catalog</li>
          <li>Easy planning - drag and drop between semesters</li>
          <li>Track fulfillment of course and major requirements through automatic calculation</li>
          <li>Export options</li>
        </ul>

        <h3>Mockups</h3>
        <ImageGridHorizontal
          images = {imgs.mockup}
        />

        <h2>Technologies</h2>
        <p>We used the MEAN stack - MongoDB (database), Express (HTTP requests), Angular, and Node.</p>
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

        <h2>Database Schema</h2>
        <p>Four tables were defined in the database.</p>
        <ul>
          <li>Users - user profile, maps user to a certain number of semesters</li>
          <li>Courses - from school records</li>
          <li>Semesters - stores courses in each semester, based on user selection</li>
          <li>Programs - course requirements</li>
        </ul>

        {/* CONSIDER using react-code-blocks package - https://www.npmjs.com/package/react-code-blocks  */}

        <ImageGridHorizontal
          images = {imgs.schema}
        />

        <h2>Prototype</h2>
        <p>The foundations of our single page application.</p>
        <ImageGridHorizontal
          images = {imgs.prototype1}
        />
        <p>Mobile view and print function.</p>
        <ImageGridHorizontal
          images = {imgs.prototype2}
        />

        <h2>Iteration</h2>
        <p>Dynamic semesters, login system, difficulty with duplicate courses.</p>
        {/*    ! ! !     */}

        {/* google slides - how has degreezy changed */}
        <ImageGridVertical
          images = {imgs.iteration}
        />

        <h2>Outcome</h2>



        <h2>Reflection</h2>



        <h3>Business Model</h3>
        <h3>Future State</h3>





      </div>

    </div>
  );
}
 
export default Degreezy;