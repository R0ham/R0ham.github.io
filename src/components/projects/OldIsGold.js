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
          data = {data.projects[curr_id]}
        />



        {/* RESEARCH */}

        {/*Loneliness Among Older Adults -> Worsening Loneliness due to COVID-19 -> Older Adults Interactions with Technology

        A study performed by the American Association of Retired Persons (AARP) found that thirty-five percent of adults aged 45 and older are lonely (NASEM). And, unsurprisingly, the vast majority of these individuals who reported feeling lonely were also considered socially isolated (NASEM).

        older members of our society are much
        more likely to be socially isolated (NASEM)

        loss of friends or family—all of which are more prevalent at older ages—contribute to one's risk of feeling lonely (Hwang). Interestingly, untreated hearing loss is one of the key contributors to loneliness as it directly affects one's ability to have meaningful social interaction (CDC). 

        Given their susceptibility to serious COVID-19 infections, older adults are likely to be even more cut off from outside life” (Ducharme).

        older adults tend to get a lot of their social interaction from scheduled events at local resources such as recreation centers, community centers, and libraries (Span). And, due to the pandemic, many of these establishments have shut down. 

        the majority of them are virtual (Span). And these virtual programs don’t help a large portion of older adults (65+) “who told Pew Research that they were not confident about using digital technologies”(Span).

        before the pandemic, Zoom had engagement from only 3% of individuals older than 60 (Ness). 

        Not only does this create a bitter sentiment towards technology, but as this digital divide grows, it hinders the opportunity of the younger and older people of the world to connect.

        After all, a simple phone call with a relative is one of the single most effective ways of combating feelings of social isolation in older adults (Hwang). and function of technological substitutes not proven to be significant

        However, modern text-based communication methods don’t have the same social benefits as a phone call (Turkle). 

        Communication that someone is thinking of you, regardless of communication method, does help prevent loneliness (UK Government).

        So, alternate communication methods ​are​ a valid way to decrease feelings of social isolation and combat loneliness. The important thing is that these alternate forms of communication do not replace a phone call.

        As we age, our skin dries and it becomes harder to keep moisture in, which leads to difficulty operating touch screens (Consumer Reports). Other research also proved that touch-panels reduce age related differences for pointing tasks and provided the recommended dimensions of 16.5 mm x 16.5 mm and a maximum movement distance of 33 mm for touch screens (Murata). Another study concluded that the most ideal path for older adults to trace with the most accuracy on a touch screen was a spiral.*/}





        <h2>Background</h2>
        <p>Our team's only constraint was to choose a "current affairs topic." At this point, we had no idea what the future held, and things were very much in flux from COVID-19. For now we were fully remote, each in our own home towns located physically disparate from each other, and very far from our fiercely collaborative design studio. We did not know how we would work together creatively in this environment. But this led us to think, what else has been dramatically affected by the pandemic?</p>

        <h2>Research</h2>
        <p>Quickly, we realized older adults, often more at risk for developing severe COVID-19 infections, were becoming increasingly socially isolated as they tried to mitigate risk of exposure. This social isolation drove up loneliness, which was already acutely felt by the older population before the pandemic began. Older adults tended to receive a lot of their social interactions from scheduled events at local establishments like community centers, and libraries. Many of these shut down and transitioned to virtual programming, which didn't help these older adults since many of them did not feel confident using digital technology (NASEM, CDC, Span).</p>

        <h3>Ethnography</h3>
        <p>Each member took 30 minutes to investigate online to see how tangible objects, spaces, and people interactions have changed to prevent COVID tranmission. We came together to discuss our findings, then split up again. This time, we went out into the world and observed our own individual communities. The recreation center was closed and the library was empty, which confirmed earlier research.</p>

        <ImageGridHorizontal
          images = {imgs.research}
        />

        <h2>Focus Area</h2>
        <p>Now more immersed, and having established the foundations of our team dynamics, we chose to focus on a problem statement.</p>
        <Quote
          quote = {"How can we change the dynamics of how the elderly interact or bond with their friends & family during the pandemic in a safe, contactless method?"}
        />

        <h2>Concept Generation</h2>
        <p>Starting at our key objectives and filtering down to greater granularity, we used the objective tree method to understand each others' visions and develop a singular direction. With our problem statement as the guiding question, we individually brainstormed for 10 minutes. When we reconvened, we organized these ideas and connected them into a mind map.</p>
        <p>With these activities, we often found ourselves in deep silent thought. In the future, we decided to use "analogies" to build off each other's ideas. This would help us participate, prevent ideas from being criticized, and enable us to dig deeper. A simultaneous boon for creativity and collaboration.</p>

        <ImageGridVertical
          images = {imgs.concept1}
        />

        <h2>Peer Feedback</h2>
        <p>Our ideas settled on connecting through an online game. Feedback from our peers convinced us this would be too high-tech and difficult to learn. The team's favorite idea then became a hybrid magnetic game board where one person could play online and the other physically in real life.</p>

        {/*<p>The group’s favorite idea initially was a magnetic game board that could be played with one person online and the other in real time physically.</p>*/}

{/*        <p>online game then hybrid digital/physical game - all our ideas were based on the idea of connecting and engaging through games - and at first these were too technical and solution-focused</p>
        <p>wizard chess - The idea is that the in-person player can physically move while the opponent will have an integrated digital control that allows them to to move their piece on their laptop/tablet device, but signal the magnetic sensors on the physical chess board to physically move those chess pieces.</p>*/}
        {/*pitched our idea to the class and met with design thinking stakeholders*/}
        {/*consider a social science approach and that our current design was too high tech for our uses, older generation adults would have to overcome learning new interfaces and interacting with touchscreens*/}
        {/*To take into consideration users who dislike games, the team also developed a touch lamp scheme that allows for communication between two people using a synchronous lamp to provide visual light signals to each other.*/}


        <h2>Pivot</h2>
        <p>But, after a period of rapid prototyping, we felt unsatisfied with our concepts and unconfident our designs would satisfy our users needs and wants. We realized our solutions were designer-centric and needed user insight, so we took a step back to prevent early lock-in. We tested a round of surveys on our close older adult family members, and then on a larger audience. We asked general questions about lifestyle and asked for evaulations on each of our prototype ideas. The aim of our survey design was to make this information digestible, and easy to answer (note the intentional lack of required fields).</p>

        {/*As mentioned earlier, our research said that older adults prefer card and physical strategy games. However, this was based on research, not from asking the people around us.*/}

        {/*Our ideas changed drastically from initially being an online game, then moving to a hybrid of online and tangible object game, and now to focusing on communication and connection through an object.*/}

        {/*From the results we learned that unlike what we have intended, older adults do not spend a lot of their time playing games and only enjoy it as a form of spending time with their family and friends. In fact, they weren’t fond of technology. They find it frustrating to adapt to technology, often requiring help from their family to set up their phones or download apps.*/}

        {/*Phone calling was a preferred method for connecting with family members who were separated by distance when physically meeting isn’t an option.*/}

        {/*used close family members as a "beta" test to refine these questions and to give to a larger audience*/}


        <ImageGridVertical
          images = {imgs.survey1}
        />

        <p>The survey results showed older adults did not spend a lot of their time playing games, and only enjoyed it when it enabled them to spend time with family and friends. But, importantly, they weren't fond of technology and often found it frustrating to adapt to.</p>

        <Quote
          quote = "'I have been lonely before. I usually connect with my friends once and awhile when we go out and do something, never really over the phone. We use the phone to make plans and that's about it. But that has changed with COVID, now I text people a lot more. And I send pictures back and forth with... [my family friend]. I would like to be able to see more people physically. All these Zoom potlucks are getting exhausting. I don’t think I enjoy connecting with people online.'"
        />

        <p>We also found that phone calling was the preferred method for connecting with family members who were separated by distance when physical meeting wasn't an option. Of the prototype ideas, our survey results showed the "touch lamp" idea had the most potential. Respondees were able to *visualize* themselves interacting with it as not only a normal lamp but also a form of casual communication to family members.</p>


        {/*We decided to run a survey with our user group to see which of our ideas they liked best and the results indicated that they liked our touch lamp idea best.*/}

        {/*<p>After carefully evaluating the preliminary survey, the team unanimously believed the touch lamp idea offers the greatest potential. The users claimed it was a good method to increase connection and interaction with family members. They were able to visualize themselves interacting with it as if it were a normal lamp, but also a form of casual communication. </p>*/}


        <h2>Second Iteration</h2>
        <h3>Revised Stakeholders</h3>
        <p>We narrowed our focus to grandparents and grandchildren, and realized we were actually designing for more than one demographic. So we revised our stakeholders: children, teens, adults, and older adults. We assumed each would have different preferences, so we brainstormed many ideas around functionality, structure, size, and features. Here we realized color as a form of communication of emotions was common and intuitive and had a clear precedent (e.g. mood rings).</p>
        {/*<p>We assumed each category of the intended audience would have different preferences: children, teenagers, adults, and older generation adults. / brainstormed lots of ideas: functionality, structure, size, and features of the lamp / We then organized the different ideas to enforce cohesion and develop a uniform design which not only helped organize our thoughts, but also visualize our team’s thoughts. / 

        accumulation of ideas also comes indecisiveness and opposing choices / This led us to conduct market research on existing products and compare its user feedback. / We noticed that using color as a form of communication was common and intuitive hence the idea of mood rings and colors as representation of certain emotions. As we delved into color theory we realized the power that just colors can convey and decided to develop a color communication lamp. / We also then went back and refined our problem statement.</p>*/}

        <ImageGridVertical
          images = {imgs.concept2}
        />

        <h3>Brand Cohesion</h3>
        <p>We then organized these thoughts to refine our overall vision and ensure our different design ideas were cohesive.</p>

        <ImageGridVertical
          images = {imgs.concept3}
        />

        <h3>Comparative Analysis</h3>
        <p>With this accumulation of ideas, there was indecisiveness. To help define a direction, we conducted market research on existing products. Here we came up with our "Gold Star" method to further narrow choices. Each of us had a set number of "stars" they could give to their favorite designs. We did this anonymously, so we wouldn't be affected by others' choices. The ones with the most stars were selected.</p>

        <ImageGridHorizontal
          images = {imgs.concept4}
        />

        <h3>Refined Focus Area</h3>
        <p>With everything we had learned, we revisited our problem statement. We decided our real intention was to facilitate a third-form of connection that would *encourage* and not replace phone conversation. Why? Phone calls already exist and they work really well! Why reinvent it? Instead, could we enable it, with something easy to learn and with a low-technological barrier to entry?</p>
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
        {/*<p>We created detailed sketches showing the interactions we were imagining.</p>*/}

        <ImageGridVertical
          images = {imgs.sketch}
        />

        <h3>Prototyping</h3>
        {/*<p>And then created a proof of concept.</p>*/}

        <ImageGridVertical
          images = {imgs.prototype1}
        />

        <h3>Survey</h3>
        <p>Again we realized we were making assumptions about which styles of lamps our users would gravitate towards. We created an "aesthetic" survey made up of 20 lamp design images of various styles. Respondees were asked to select their age category and their favorites of the bunch. Contrary to our initial hypothesis, after approximately 250 responses from users aged mostly from 13-59 years old, we discovered there was no discernible difference in aesthetic preference across age groups. Instead, people seemed to favor similar styles regardless of their age.</p>



        <h2>Third Iteration</h2>
        <h3>Series Thinking</h3>
        <p>The most preferred designs were grouped into style categories.</p>
        <ImageGridHorizontal
          images = {imgs.survey2}
        />

        <h3>Research</h3>
        <p>We discovered a simple phone call with a relative was one of the single most effective ways of combatting feelings of social isolation in older adults. Apparently, modern text-based communication methods don't have the same social benefits as a phone call. Technological substitutes have not been proven to be significant, but some sources say communication that someone is thinking of you, regardless of communication method, does help prevent loneliness (Hwang, Turkle, UK Government).</p>

        {/*As we age, our skin dries and it becomes harder to keep moisture in, which leads to difficulty operating touch screens (Consumer Reports). Other research also proved that touch-panels reduce age related differences for pointing tasks and provided the recommended dimensions of 16.5 mm x 16.5 mm and a maximum movement distance of 33 mm for touch screens (Murata). Another study concluded that the most ideal path for older adults to trace with the most accuracy on a touch screen was a spiral.*/}


        <h3>Unification</h3>
        {/*interface + base*/}
        <ImageGridVertical
          images = {imgs.unify1}
        />



        <h3>Interaction</h3>
        <ImageGridVertical
          images = {imgs.prototype2}
        />

        <h3>Revision</h3>
        <ImageGridHorizontal
          images = {imgs.revision}
        />


        <h2>Final Proposal</h2>
        <p></p>

        <h3>User Journey</h3>
        storyboard
        <ImageGridHorizontal
          images = {imgs.journey}
        />

        <h3>Metamorphic</h3>
        <ImageGridVertical
          images = {imgs.metamorphic}
        />

        <h3>Modern</h3>
        <ImageGridHorizontal
          images = {imgs.modern}
        />

        <h3>Paper</h3>
        <ImageGridVertical
          images = {imgs.paper}
        />

        <h3>Mini</h3>
        <ImageGridVertical
          images = {imgs.mini}
        />

        <h2>Reflection</h2>
        <p></p>


        not being stuck to a design process - constantly revisiting and reiterating
        testing assumptions with users


        together-but-separate teamwork which we found to be extremely effective in delivering fast paced
        extraordinarly successful
        incredibly invigorating team collaboration - one of the best experiences I've ever had
        dividing and conquering
        diverging and converging - brainstorming and grouping
        constantly getting feedback and reflecting on our approach, and constantly refining



      </div>

    </div>
  );
}
 
export default OldIsGold;