import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';
import Quote from '../modal/Quote.js';

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


        <h2>Background</h2>
        <p>Posters would line campus walkways, even in winter! >>>>></p>
        <ImageGridVertical
          images = {imgs.background}
        />

        <h2>Challenge</h2>
        <p>Create a virtual poster bulletin to supplant a wasteful physically printed postering system while also simultaneously increasing poster viewership and access.</p>
        {/* how did we come to this? show a photo of RPI campus  */}
        {/* explain takedown date  */}

        <h2>Target Audience</h2>
        <ul>
          <li>students</li>
          <li>faculty</li>
          <li>staff</li>
          <li>club moderators</li>
          <li>event organizers</li>
        </ul>

        <h2>Wireframes</h2>
        <ImageGridVertical
          images = {imgs.wireframe}
        />

        <h2>Mockups</h2>
        <p>Early on, my team and I created mockups to ground our work towards one common goal. We settled on three core pages: a “home” page which would display all the posters, a “manage” page where a signed-in user could edit up to three posters, and an “upload“ page where new posters could be added.</p>
        <p>In emulation of a campus rule that printed posters must stipulate when they can be taken down, virtual takedown dates were incorporated to keep the posters relevant and timely refreshed.</p>
        <ImageGridHorizontal
          images = {imgs.mockup}
        />

        <h2>Prototype</h2>
        <p>Hovering over posters on the homepage and clicking into them would show details about the event.</p>
        <ImageGridVertical
          images = {imgs.prototype1}
        />

        <p>Then once logged in, admin view would allow you to manage and upload new posters.</p>
        <ImageGridHorizontal
          images = {imgs.prototype2}
        />

        <h2>Branding</h2>
        <p>Spread of logo explorations.</p>
        <ImageGridHorizontal
          images = {imgs.logo1}
        />

        <p>Initially, experimented with an abstract take on the thumbtack motif, but after showing it to a few people, realized it was too hard to interpret. Dramatically simplified it by incorporating the thumbtack into the letter "i", simplified it even more, and then experimented with height of the vertical ascender.</p>
        <ImageGridVertical
          images = {imgs.logo2}
        />


        <h2>Emulation</h2>
        <p></p>
        <ImageGridHorizontal
          images = {imgs.emulation}
        />
        {/*  took photos of posters in real world  */}


        <h2>Outcome</h2>
        <p>We wanted users to primarily scroll through posters so it was crucial that the interface was clean and efficient. We used a responsive grid-based view, where posters could be clicked into for more details.</p>
        <p>The experience was kept cohesive throughout. For example, demarcated fields on “manage“ allowed users to easily make edits that would update info instantly.</p>
        <ImageGridHorizontal
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>
        <p>In the future, we would have liked to build-in content moderation as well as a slideshow display for TVs, so that our school could fully transfer over to this new system.</p>

        {/*  more organic grid  */}


      </div>

    </div>
  );
}
 
export default PushPin;