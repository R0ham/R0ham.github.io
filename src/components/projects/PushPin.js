import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function PushPin(props) {
  const curr_id = 4;
  const proj = data.projects[curr_id];
  const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {proj}
        />


        {/*  LOGO iteration  */}
        {/*  can say that we went and took photos of real world posters, and saw how they were affixed */}



        <h2>Challenge</h2>
        <p>Create a virtual poster bulletin to supplant a wasteful physically printed postering system while also simultaneously increasing poster viewership and access.</p>

        <h2>Target Audience</h2>
        <ul>
          <li>students</li>
          <li>faculty</li>
          <li>staff</li>
          <li>club moderators</li>
          <li>event organizers</li>
        </ul>

        <h2>Wireframes</h2>
        images

        <h2>Mockups</h2>
        <p>Early on, my team and I created mockups to ground our work towards one common goal. We settled on three core pages: a “home” page which would display all the posters, a “manage” page where a signed-in user could edit up to three posters, and an “upload“ page where new posters could be added.</p>
        <p>In emulation of a campus rule that printed posters must stipulate when they can be taken down, virtual takedown dates were incorporated to keep the posters relevant and timely refreshed.</p>
        images

        <h2>Prototype</h2>
        images

        <h2>Outcome</h2>
        <p>We wanted users to primarily scroll through posters so it was crucial that the interface was clean and efficient. We used a responsive grid-based view, where posters could be clicked into for more details.</p>
        <p>The experience was kept cohesive throughout. For example, demarcated fields on “manage“ allowed users to easily make edits that would update info instantly.</p>
        images - with data

        <h2>Reflection</h2>
        <p>In the future, we would have liked to build-in content moderation as well as a slideshow display for TVs, so that our school could fully transfer over to this new system.</p>


      </div>

    </div>
  );
}
 
export default PushPin;