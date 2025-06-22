import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';
import Quote from '../modal/Quote.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function NookHook(props) {
  const curr_id = 3;
  const proj = data.projects[curr_id];
  const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {proj}
        />

        <h2>Brainstorming</h2>
        <p>At first, I brainstormed a variety
of different ways to improve the overall studio experience. I ended up focusing on backpack storage.
I realized our studio had no defined place for these bags, so they were often placed on the ground where they would be out of reach and would also encumber efforts to rearrange tables and chairs.</p>
        <ImageGridHorizontal
          images = {imgs.brainstorming}
        />


        <h2>Thumbnails</h2>
        <ImageGridHorizontal
          images = {imgs.thumbnail}
        />


        <h2>Pinup</h2>
        <ImageGridHorizontal
          images = {imgs.pinup}
        />

        <h2>Prototype</h2>
        <p>
With the first iteration on the left, I used cork to experiment with form and scale.</p>

        <p> People generally seemed
to like the aesthetic of the cork and liked the curvature of the piece. One person said that they thought it
“afforded a lot of weight” and they didn’t know why. I thought that was kind of a funny statement
because no one tried putting their backpack on it, probably because they were worried the cork hook
would snap off. </p>
        <ImageGridVertical
          images = {imgs.prototype}
        />

        <h2>Outcome</h2>
        <p>The tail of the screw was kept flat to prevent damage to the table and the hook was designed to be sturdy and not hurt if someone bumped into it.</p>
        <p>I think the product could be made smaller (in width
especially) and the screw smaller in proportion. It would be nice if the screw wasn’t able to come
completely off of the hook component, so that the screw wouldn’t be accidentally separated. Thankfully,
my backpack fits nicely onto the hook and it appears pretty stable as well. The trouble is that the
backpack is supported at only one point, so it isn’t as easy as I would have liked to take things out from
the main compartments of the bag, since the back of the bag pinches in with the stress (although the
front zips are still easily accessible).</p>
        <ImageGridVertical
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>
        <p>I asked a classmate, and potential user, if they would put their backpack on the final prototype and they
said they wouldn’t “trust plastic.” This table-hook studio design relies on people feeling comfortable in
using it for its intended purpose.</p>



      </div>

    </div>
  );
}
 
export default NookHook;