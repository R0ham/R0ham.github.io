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

        <h2>Background</h2>
        <p>The promise of our studio space was swift and effective collaboration. It should always be easy to pull up a chair or bring tables together, as you're bouncing ideas of each other and seeking feedback. The space needed to be flexible, so thoughts could flow freely and harmoniously.</p>
{/*        <ImageGridHorizontal
          images = {imgs.studio2}
        />*/}
        <ImageGridHorizontal
          images = {imgs.studio}
        />

        <h2>Brainstorming</h2>
        <p>After brainstorming, I realized our studio had no defined place for backpacks. They were too heavy for the back of the chair, and would take up too much space on top of the table. They were often placed on the ground, so to reach them, you'd have to awkwardly bend down from the height of the chair. It also constrained where people could sit, because the bags would flop over unless propped up by a table leg. Every time tables and chairs had to rearranged, the bags would get in the way.</p>
        <Quote
          quote = "How could we improve the studio experience?"
        />
        <ImageGridHorizontal
          images = {imgs.brainstorming}
        />

        {/*My goal was to find an accommodative solution that wouldn't require extensive installation. */}

        <h2>Thumbnails</h2>
        <p>To make more optimal use of the collaborative space, I focused on bringing the backpacks closer to the people using them. A series of thumbnail sketches were used to explore ideas. Initially, these were focused on attaching to the table legs, but there were only four per table, and similarly to before, would constrain again where people could sit. A hook along the table's edge was more versatile.</p>
        <ImageGridHorizontal
          images = {imgs.thumbnail}
        />

        <h2>Pinup</h2>
        <p>Conversations with others resulted in a critical piece of feedback - backpacks often contained valuable and expensive equipment like laptops. A hook needed to inspire confidence for being able to hold the full weight of the bag, without fear of failure. The design was refined to be more robust and to promote stability. A pinup shows the purpose, scale, and features: easy, secure installation with rubberized grips and a screw fastener.</p>
        <ImageGridHorizontal
          images = {imgs.pinup}
        />

        <h2>Prototype</h2>
        <p>Cork helped prove the design's form and scale. Its natural malleability enabled testing of smooth edges. When asked, people thought the shape "afforded a lot of weight" but weren't able to pinpoint why. But funnily enough, no one tested with a backpack, likely because of the above concern and understanding cork could snap with this much pressure.</p>
        <ImageGridVertical
          images = {imgs.prototype}
        />

        <h2>Outcome</h2>
        <p>A 3D printed model was more comfortably used. Here the screw was sampled - the tail end was intentionally kept flat to prevent damage to the underside of the table and to ensure a solid hold.</p>
        <ImageGridVertical
          images = {imgs.outcome}
        />

        <h2>Reflection</h2>
        <p>The design worked well and was able to create a secure hold easily. The size of the hook and the screw would ideally be reduced. As a further enhancement, it would be best if the screw wasn't possible to fully detach from the hook. A complete set would prevent the pieces from becoming accidentally separated.</p>
        <p>In testing, I discovered the backpack held successfully but was supported from only a single place on the hook. When combined with the weight of the bag, this resulted in the bag pinching from the stress. This made it difficult to remove content from the main zippers. A more distributed hook would be handy.</p>
        <p>Users continued to have concerns about the material. When asked to test, one user stated, "I wouldn't trust plastic." A different material like metal, was clearly needed. This balance between perceived stability and accessibility of the design was unexpectedly the most interesting aspect of this project.</p>

      </div>

    </div>
  );
}
 
export default NookHook;