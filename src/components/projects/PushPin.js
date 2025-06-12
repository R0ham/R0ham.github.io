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
        <p>It's common to find posters along campus walkways, even in winter! This is one of the main ways in which students learn about events and opportunities that are happening on campus. Clubs use them to attract members, but it requires multiple steps: printing them, putting them up, and clean up afterwards.</p>
        <p>Campus policy requires each poster to have a "takedown date" to ensure posters don't stay around forever, but organizers often forget, so the janitorial faculty has to clean things up. Sometimes, because of the weather, things worsen  - posters become wads of paper under the elements.</p>
        <p>For students, the process is also difficult. Here's a lesson from my personal life as an example: even if I successfully keep my eyes peeled, I'd end up taking photos to keep track of the events I was interested in.</p>
        <ImageGridVertical
          images = {imgs.background}
        />

        <h2>Challenge</h2>
        <p>Creating a virtual poster bulletin to connect event organizers with attendees would simplify complexity and improve the experience for everyone involved.</p>

        <h2>Goals</h2>
        <ul>
          <li>Supplant a wasteful and inefficient physical-postering system.</li>
          <li>Enable easy advertisement and management by organizers.</li>
          <li>Increase poster viewership and access.</li>
        </ul>

        <h2>Wireframes</h2>
        <p>We envisioned a smooth and dynamic interface, with the option to examine additional detail.</p>
        <ImageGridVertical
          images = {imgs.wireframe}
        />

        <h2>Mockups</h2>
        <p>Eventually, we settled on these core pages and created simple illustrated mockups.</p>
        <ul>
          <li>Home - displaying all posters</li>
          <li>Manage - where a signed-in user could edit posters they uploaded</li>
          <li>Upload - where new posters could be added</li>
        </ul>
        <p>We kept the takedown dates since it was already familiar, and because it would keep content refreshed and timely. To that end, we decided organizers could only keep 3 posters active at once.</p>
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
        {/*Search by keywords
        Sorting
        Infinite scroll
        Archiving taken-down posters
        Default poster templates
        flag for moderation
        */}


      </div>

    </div>
  );
}
 
export default PushPin;