import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import ImageGridHorizontal from '../modal/ImageGridHorizontal.js';
import ImageGridVertical from '../modal/ImageGridVertical.js';
import Quote from '../modal/Quote.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function OldIsGold(props) {
  const curr_id = 0;
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
        <p>Our team was asked to choose a "current affairs topic." At this point, we had no idea what the future held, and things were very much in flux from COVID-19. For now we were fully remote, each back in our own hometowns located physically disparate from each other, and very far from our fiercely collaborative design studio. We did not know how we would work together creatively in this environment. But this led us to think, what else had been dramatically affected by the pandemic?</p>

        <h2>Research</h2>
        <p>Quickly we realized older adults, often more at risk for developing severe COVID-19 infections, were becoming increasingly socially isolated as they tried to mitigate risk of exposure. This social isolation drove up loneliness, past already high levels from before the pandemic. Older adults tended to receive a lot of their social interactions from scheduled events at local establishments like community centers, and libraries. Many of these shut down and transitioned to virtual programming, which didn't help these older adults since many of them did not feel confident using digital technology (NASEM, CDC, Span).</p>

        <h3>Ethnography</h3>
        <p>Each member took 30 minutes to investigate online to see how objects, spaces, and people interactions had tangibly changed to prevent COVID transmission. We came together to discuss our findings, then split up again. This time, we went out into the world and observed our own individual communities. Our local recreation center was closed and the library was empty, which confirmed earlier research.</p>

        <ImageGridHorizontal
          images = {imgs.research}
        />

        <h2>Focus Area</h2>
        <p>Now more immersed, and having established the foundations of our team dynamic, we chose a problem statement to focus our work.</p>
        <Quote
          quote = {"How can we change the dynamics of how the elderly interact or bond with their friends & family during the pandemic in a safe, contactless method?"}
        />

        <h2>Concept Generation</h2>
        <p>We settled on key goals, and drew up a tree of objectives, which filtered down to greater granularity. This helped us understand each others' visions and develop a singular collective direction. Then, using our problem statement as the guiding question, we individually brainstormed ideas for 10 minutes. When we reconvened, we organized these thoughts into a mind map of connections.</p>
        <p>With these activities, we often found ourselves in deep silent thought. In the future, we decided to use "analogies" to build off one another. We reasoned this would help us participate equally, prevent ideas from being criticized, and enable us to dig deeper.</p>

        <ImageGridHorizontal
          images = {imgs.concept1}
        />

        <h2>Peer Feedback</h2>
        <p>Our ideas culminated on connecting through an online game. But, feedback from our peers convinced us this would be too high-tech and difficult to learn. So our preference shifted to a hybrid magnetic game board where one person could play online and the other physically in real life.</p>

        {/*To take into consideration users who dislike games, the team also developed a touch lamp scheme that allows for communication between two people using a synchronous lamp to provide visual light signals to each other.*/}

        <h2>Pivot</h2>
        <p>After a period of rapid prototyping, we felt unsatisfied with our concepts and unconfident our designs would satisfy the needs and wants of our target audience. We realized our solutions were too designer-centric and needed user insight, so we took a step back to prevent early stage lock-in. We tested a round of surveys on our close older adult family members, before sharing it broadly.</p>
        <p>We asked general questions about lifestyle and asked for evaulations on each of our prototype ideas. The aim of our survey design was to make this information digestible, and easy to answer (note the intentional lack of required fields).</p>

        {/*Our ideas changed drastically from initially being an online game, then moving to a hybrid of online and tangible object game, and now to focusing on communication and connection through an object.*/}

        <ImageGridVertical
          images = {imgs.survey1}
        />

        <p>The survey results showed older adults did not spend a lot of their time playing games, and only enjoyed them when it enabled spending time with family and friends. But, most importantly, they weren't fond of technology and often found it frustrating to adapt to, which meant learning a new game/interface would likely be burdensome.</p>

        <Quote
          quote = "A survey respondent - 'I have been lonely before. I usually connect with my friends once and awhile when we go out and do something, never really over the phone. We use the phone to make plans and that's about it. But that has changed with COVID, now I text people a lot more. And I send pictures back and forth with... [my family friend]. I would like to be able to see more people physically. All these Zoom potlucks are getting exhausting. I don’t think I enjoy connecting with people online.'"
        />

        <p>We also found phone calling was the preferred method for connecting with family members when physically meeting wasn't an option. Of the prototype ideas, our survey results showed the "touch lamp" idea had the most potential. Respondees were able to *visualize* themselves interacting with it as a normal lamp and as a form of casual communication to family members.</p>

        {/* ------ */}

        <h2>Second Iteration</h2>
        <h3>Revised Stakeholders</h3>
        <p>We narrowed our focus to grandparents and grandchildren, and realized we were actually designing for more than one demographic. So we revised our stakeholders to children, teens, adults, and older adults. We assumed each would have different preferences, so we brainstormed many ideas around functionality, structure, size, and features. Here we realized color as a way to communicate emotions was common, intuitive, and had a clear precedent (e.g. mood rings).</p>

        <ImageGridHorizontal
          images = {imgs.concept2}
        />

        <h3>Brand Cohesion</h3>
        <p>We then organized these thoughts to refine our overall vision and ensure our different design ideas were cohesive.</p>

        <ImageGridVertical
          images = {imgs.concept3}
        />

        <h3>Comparative Analysis</h3>
        <p>With this many ideas, we became indecisive. To move forward, we conducted market research on existing products. Here we came up with our "Gold Star" method to narrow down choices. Each of us had a set number of "stars" they could give to their favorite designs. We did this anonymously, so we wouldn't be affected by others' choices. The ones with the most stars were selected.</p>

        <ImageGridHorizontal
          images = {imgs.concept4}
        />

        <h3>Refined Focus Area</h3>
        <p>We decided to revisit our problem statement to build in everything we had learned. We realized our real intention was to facilitate a third-form of connection that would *encourage* and not replace phone conversation. Why? Because phone calls are familiar and already work really well!</p>
        <Quote
          quote = {"How can we create a meaningful yet effortless method of communication between older adults and their younger relatives that facilitates meaningful social connection and encourages phone conversation?"}
        />
{/*        <Quote
          quote = {"How can we accomplish this with a physical product that doesn’t require technological expertise?"}
        />
        <Quote
          quote = {"How can we ensure our product encourages, not replaces, further interaction through phone conversation?"}
        />*/}

        <h3>Sketches</h3>
        <p>Detailed sketches helped flesh out our Plant and Moon lamps. The idea was: could we create an engaging and rewarding experience by having the lamps become *alive* when interacted with. In other words, by having a plant bloom, and having a moon become full.</p>

        <ImageGridHorizontal
          images = {imgs.sketch}
        />

        <h3>Prototyping</h3>
        <p>Wood, foamcore, and paper origami was used to prove the mechanics of the concept.</p>

        <ImageGridVertical
          images = {imgs.prototype1}
        />

        <h3>Survey</h3>
        <p>Pausing again, we realized we had made assumptions about lamps our users would enjoy. We created an "aesthetic" survey made up of 20 images of lamp design styles. Respondees were asked to select an age category and choose favorites.</p>

        <p>Contrary to our initial hypothesis, approximately 250 responses from users mostly 13-59 years old showed there was no discernible difference in aesthetic preference. Instead, people seemed to favor similar styles regardless of age group.</p>

        <h2>Third Iteration</h2>
        <h3>Series Thinking</h3>
        <p>The most preferred designs were grouped into style categories.</p>
        <ImageGridHorizontal
          images = {imgs.survey2}
        />

        <h3>Research</h3>
        <p>Additional research confirmed a simple phone call with a relative was one of the single most effective ways of combatting feelings of social isolation in older adults. Apparently, modern text-based communication methods don't have the same social benefits. Although technological substitutes have not been proven to be significant, some sources say communication that someone is thinking of you, regardless of communication method, does help prevent loneliness (Hwang, Turkle, UK Government).</p>
        <p>We also learned with age, our skin dries and it becomes harder to keep moisture in, which leads to difficulty operating touch screens. Other research proved the recommended dimensions to reduce age related differences with touch-panels were 16.5mm x 16.5mm, with a maximum movement distance of 33mm. And the most ideal path for older adults to trace with the greatest accuracy on a touch screen was a spiral (Consumer Reports, Murata, Heintz).</p>

        <h3>Unification</h3>
        <p>With these insights, we created prototypes for our unifying elements across the lamp styles - the base and the interface. A balsa wood mount helped test for optimal surface incline, and a sketch of the interface, inspired by classic tactile click dials like the iPod, would allow a user to select a color and brightness to communicate.</p>
        <ImageGridVertical
          images = {imgs.unify1}
        />

        <h3>Interaction</h3>
        <p>CAD prototyping helped further refine the interaction. Beveled edges, Braille-inspired dots, and material differences were added to create textural differentiation between components. The goal was to enhance the sensory experience and make it clear what was being interacted with through touch.</p>
        <ImageGridVertical
          images = {imgs.prototype2}
        />

        <h3>Revision</h3>
        <p>The earlier style categories, and continued emphasis on consistent elements were used to create a throughline between lamp series categories.</p>
        <ImageGridHorizontal
          images = {imgs.revision}
        />

        {/* ------ */}

        <h2>Final Proposal</h2>
        <h3>User Journey</h3>
        <p>The storyboard illustrates a grandparent and a grandchild connecting through a pair of touch lamps.</p>
        <ImageGridHorizontal
          images = {imgs.journey}
        />

        <h3>Metamorphic</h3>
        <p>Premium moving elements that animate when a light message is transmitted.</p>
        <ImageGridVertical
          images = {imgs.metamorphic}
        />

        <h3>Modern</h3>
        <p>Minimalist lamps with exposed bulbs for a contemporary feel.</p>
        <ImageGridHorizontal
          images = {imgs.modern}
        />

        <h3>Paper</h3>
        <p>Functional and conventional lamps with patterned or origami paper shades.</p>
        <ImageGridVertical
          images = {imgs.paper}
        />

        <h3>Mini</h3>
        <p>Soft plastic, rounded edges, and pastel colors. Battery powered and can be cradled.</p>
        <ImageGridHorizontal
          images = {imgs.mini}
        />

        {/* ------ */}

        <h2>Reflection</h2>
        <p>The major lesson from this project was the importance of fluidity. Looking back, we were smart not to subscribe to a rigid design process. Because we allowed ourselves to be flexible, we were able to pivot and reiterate when we needed to. A planned process was useful as a starting guideline, but if followed too rigorously, it would have been inhibitory, preventing us from making the right choices.</p>
        <p>This flexibility enabled a feedback-driven approach, where we continuously tested our assumptions. This repeatedly led to valuable and unexpected insight, which helped us refine our approach, and brought us closer to the most successful solution.</p>
        <p>The together-but-separate teamwork strategy, where we divided and conquered by splitting ownership, was incredibly successful in delivering fast-paced iterations catered to our individual strengths. Our overall methods of diverging and converging, e.g., to individually brainstorm and then collaboratively assess, felt incredibly invigorating. To date, this remains one of the best team-based experiences I've ever had, and is one I look back on fondly.</p>
        {/*<p>I'm incredibly proud of the end result, and the journey we took to get there. I truly believe we designed a low-fidelity bandwidth of communication, able to connect generations together to reduce loneliness. I wish I could continue working with this team, so we could create a Minimum Viable Product (MVP), and bring it in front of our users to test!</p>*/}

      </div>

    </div>
  );
}
 
export default OldIsGold;