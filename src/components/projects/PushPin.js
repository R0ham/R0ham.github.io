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
        <p>We hoped to build a strong brand, so pushPin would become a known symbol and be easy to recognize when discussed through word of mouth. Below is a spread of identity/logo explorations.</p>
        <ImageGridHorizontal
          images = {imgs.logo1}
        />

        <p>Initially, we experimented with an abstract thumbtack motif, but realized it was too hard to interpret after showing it to others for feedback. In response, we dramatically simplified the design by incorporating the thumbtack into the letter "i", simplified it even more, and then adjusted the height of the vertical ascender.</p>
        <ImageGridVertical
          images = {imgs.logo2}
        />

        <h2>Emulation</h2>
        <p>For our final iteration, we wanted to populate our system with realistic data. We thought about creating better "dummy" data by designing our own posters, but then realized we had plenty of poster examples at our fingertips already! We went back outside, captured photos of all the posters we saw, and prepared them for import. Looking back, this was a smart and efficient use of our time and gave us the best possible samples to work with.</p>
        <ImageGridHorizontal
          images = {imgs.emulation}
        />

        <h2>Outcome</h2>
        <p>Our end result was a fully functional working prototype with login, and samples of real posters. The primary intended interaction was scrolling and easy digestion of information, so the interface was kept clean, efficient, and responsive to naturally size based on device. Real-time and dynamic data saving allowed for instant upload of new files, and editing updates.</p>
        <ImageGridVertical
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>
        <p>We believe the demonstration of this project's utility was executed well. But we had no shortage of ideas, and we already had plenty of growth opportunities identified. We would have loved to explore TV support, so posters from the site would automatically slideshow, and a separate TV content management system could be avoided.</p>
        <p>We also realize there would need to be content moderation tools because no system is free from the potential for abuse. Enabling easy poster upload and creation would also be essential: default poster templates or integration with design tools like Canva would be interesting. An archive tool for taken-down posters could also be valuable.</p>
        <p>Many quality of life enhancements to the home page gallery were also possible. A more organic and dynamic grid display (with varying dimensions) would be beautiful, and searching by keywords, sorting, and infinite scroll would improve the experience further.</p>

      </div>

    </div>
  );
}
 
export default PushPin;