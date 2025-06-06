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
        <p>College is a period of uncertainty, freedom, and growth. It's difficult and undesirable to make a plan of study, so students end up picking classes semester-by-semester. Advisors try their best to help, but only after a few years does it dawn on you: graduation is coming up, but your core requirements are left unfulfilled. You wonder what these seemingly unrelated classes you've taken, amount to.</p>
        <p>What if there was a better way? A way you could keep track of the courses you're taking, understand what requirements you've already fulfilled, and which courses you'd still need to take. And what if this was easy to do, and it helped your conversations with your advisor? Plus it saved you, a financially strapped student, from paying for extra unnecessary semesters.</p>
        <p>This is a degree scheduler that helps you visualize your degree progress, helps you decide and shoot for classes you want to take, and helps you determine how many semesters you need to graduate.</p>

        <h2>Competitive Analysis</h2>
        <p>Plenty of solutions exist for managing your degree and planning your graduation timeline, but these interfaces are often clunky, difficult to use, and don't automatically incorporate your school's specific course requirements, especially for dual majors. Because of these difficulties, even though students may already have access to these expensive enterprise tools, they frequently go underutilized.</p>

        <h2>Value Proposition</h2>
        <h3>Goal</h3>
        <p>Develop a simple-to-use interface, with automatic reconciling of prerequisite and corequisite requirements. Enable flexibility, a planning mindset, and enable conversations with faculty advisors.</p>

        <h3>Key Features</h3>
        <ul>
          <li>User accounts</li>
          <li>Semester view</li>
          <li>Search for courses from the catalog</li>
          <li>Easy planning - drag and drop between semesters</li>
          <li>Track fulfillment of course and major requirements through automatic calculation</li>
          <li>Export options</li>
        </ul>

        <h3>Mockups</h3>
        <ImageGridHorizontal
          images = {imgs.mockup}
        />

        <h2>Technologies</h2>
        <p>We built a REST API and used the MEAN stack which consisted of MongoDB (database), Express (HTTP requests), AngularJS (web framework), and Node.</p>
        <ul>
          <li>Frontend</li>
          <ul>
            <li>Dragula - drag and drop functionality</li>
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
          <li>Courses - catalog from school records</li>
          <li>Semesters - each object stores courses, based on user selection</li>
          <li>Programs - requirements for programs offered</li>
        </ul>

        {/* CONSIDER using react-code-blocks package - https://www.npmjs.com/package/react-code-blocks  */}

        <ImageGridHorizontal
          images = {imgs.schema}
        />

        <h2>Prototype</h2>
        <p>The foundations of our single page application allowed for basic drag-and-drop on some manually inputted courses. We tested the original design interactions, and ensured they would be intuitive to understand and use. To visualize fulfilled requirements, we experimented with a toggleable side panels.</p>
        <ImageGridHorizontal
          images = {imgs.prototype1}
        />
        <p>Mobile view responsiveness and the print function were also built early.</p>
        <ImageGridVertical
          images = {imgs.prototype2}
        />

        <h2>Iteration</h2>
        <p>To enable flexible graduation timelines, we added the ability to dynamically adjust the number of semesters. These would be hidden from view, but still present on the database, so they could be restored, in case courses were saved to them.</p>
        <p>We also implemented a login system, integrated with our school's central authentication system, to enable an easy entry point for existing students, our target audience.</p>
        <p>When testing the user interactions, we stumbled on our most challenging issue: it was possible to drag a course into a semester that had the same course already. This saved into the database and the cycle could be repeated - which meant the courses accumulated and became untenable. We eventually solved this by preventing the drag when there would be duplication on the frontend, but found there were edge cases in which it was possible to circumvent this. So we added a check to the database to prevent duplicate items from saving.</p>
        <ImageGridHorizontal
          images = {imgs.iteration}
        />

        <h2>Outcome</h2>
        <p>We created a unified visual design language and overhauled each component to be consistent and ensured drag-and-drop interactions were smooth. We also greatly refined the reliability of the export print features.</p>
        <ImageGridHorizontal
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>
        <p>Shareable URLs & faculty support; wanted to be able to build dynamic course prerequsite check, opportunities to contract with the school (for business model, a way to provide access but prevent bloat from typical monetization methods like ads or sponsorship)</p>
        <p>wish we had more time to test with real students (probably the value wouldn't be immediately clear until you were well into college, but how could you get people to start using it? - maybe in early advisor discussions, or integrated with picking your schedule for an upcoming semester) ||| challenges with using new technologies like Dragula, MongoDB Atlas, integrated login</p>


{/*        <h3>Business Model</h3>
        <h3>Future State</h3>*/}





      </div>

    </div>
  );
}
 
export default Degreezy;