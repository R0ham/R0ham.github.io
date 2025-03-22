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


        <h2>Background</h2>
        <p>A collaborative experiment very much influenced by the global pandemic. The class was remote for nearly the full duration and team members were physically disparate from each other, with all of us being in our own hometowns. Our only constraint was to choose a current affairs topic as our central theme. Starting research confirmed what we were feeling ourselves, the pandemic was contributing to loneliness.</p>

        {/* especially the older generation age group. */}
        {/*loneliness can lead to problematic health deterioration such as increases one's risk of premature death, dementia, heart disease, and stroke. Which is also associated with higher rates of depression, anxiety, suicide, and heart failure*/}

        <h2>Ethnography</h2>

        {/*Together, we developed three main research spaces including tangible objects that reduced the contamination caused by COVID, space designed to help prevent disease transmission, and lastly people and their interactions living in the COVID state. Each member took half an hour to research and observe the three spaces described above and came together to discuss our findings and areas of interest. Not only was this design method our first step to team development, but also our first interaction with our design space.*/}

        <p>ethnography recreational spaces and libraries</p>

        {/* observed our physical surroundings and interactions (in our own communities. Capturing individuals would strengthen documentation on communal interaction, but also disturbs their privacy. Our team tried to cope with this by taking more images of the space or images of the backs of individuals rather than their faces.*/}

        <ImageGridHorizontal
          images = {imgs.research}
        />

        <h2>Focus Area</h2>
        <Quote
          quote = {"Due to the fairly new pandemic, social distancing policies have been implemented, further separating the older generation (60+) from their families and their broader community. How can we change the dynamics of how the elderly interact or bond with their friends & family during the pandemic in a safe, contactless method?"}
        />


        <h2>Concept Generation</h2>
        <p>objective tree method to brainstorm and generate the goals and objectives - key objectives -> filtering down to greater granularity -- understanding each other's visions and develop one cohesive one as a result</p>
        <p>Each member wrote down any ideas that came to their mind within the time frame. After the 10 minutes, the team started to connect and develop the randomized ideas into a mind map.</p>
        {/*We often found ourselves in silent or deep thought. In the future, we decided it would be preferable to make analogies (direct, personal, symbolic, and fantasy), or ‘synectics.’ in building off of previous ideas. prevent a locked in mindset where we thinking in terms of objectives in mind and allow us to ensure no ideas are criticized or discouraged.*/}

        <ImageGridVertical
          images = {imgs.concept1}
        />


        <h2>Peer Feedback</h2>
        <p>online game then hybrid digital/physical game - all our ideas were based on the idea of connecting and engaging through games - and at first these were too technical and solution-focused</p>

        <p>wizard chess - The idea is that the in-person player can physically move while the opponent will have an integrated digital control that allows them to to move their piece on their laptop/tablet device, but signal the magnetic sensors on the physical chess board to physically move those chess pieces.</p>
        {/*pitched our idea to the class and met with design thinking stakeholders*/}
        {/*consider a social science approach and that our current design was too high tech for our uses, older generation adults would have to overcome learning new interfaces and interacting with touchscreens*/}
        {/*To take into consideration users who dislike games, the team also developed a touch lamp scheme that allows for communication between two people using a synchronous lamp to provide visual light signals to each other.*/}


        <h2>Pivot</h2>
        <p>After a period of rapid prototyping, we found ourselves feeling unsatisfied with our concepts and unconfident  our designs would satisfy our users needs and wants. We realized that our solutions were too designer-centric and needed additional user insight. To prevent early lock-in and ensure we wanted to take the route of games to help seniors cope with loneliness, we decided to take a step back and evaluate our plans. We created two rounds of surveying with the first asking general questions relating to the lifestyle of older adults. This survey then ended with an evaluation and test on three of our main prototype ideas we decided to move forth with.</p>

        {/*As mentioned earlier, our research said that older adults prefer card and physical strategy games. However, this was based on research, not from asking the people around us.*/}

        {/*Our ideas changed drastically from initially being an online game, then moving to a hybrid of online and tangible object game, and now to focusing on communication and connection through an object.*/}

        {/*From the results we learned that unlike what we have intended, older adults do not spend a lot of their time playing games and only enjoy it as a form of spending time with their family and friends. In fact, they weren’t fond of technology. They find it frustrating to adapt to technology, often requiring help from their family to set up their phones or download apps.*/}

        {/*Phone calling was a preferred method for connecting with family members who were separated by distance when physically meeting isn’t an option.*/}

        {/*used close family members as a "beta" test to refine these questions and to give to a larger audience*/}


        <ImageGridVertical
          images = {imgs.survey1}
        />

        <Quote
          quote = "'I have been lonely before. I usually connect with my friends once and awhile when we go out and do something, never really over the phone. We use the phone to make plans and that's about it. But that has changed with COVID, now I text people a lot more. And I send pictures back and forth with... [my family friend]. I would like to be able to see more people physically. All these Zoom potlucks are getting exhausting. I don’t think I enjoy connecting with people online.'"
        />


        <p>After carefully evaluating the preliminary survey, the team unanimously believed the touch lamp idea offers the greatest potential. The users claimed it was a good method to increase connection and interaction with family members. They were able to visualize themselves interacting with it as if it were a normal lamp, but also a form of casual communication.</p>


        <h2>Second Iteration</h2>
        <p></p>
{/*        <p>How can we create a meaningful yet effortless method of communication between older adults and their younger relatives that facilitates meaningful social connection and encourages phone conversation?</p>
        <p>How can we accomplish this with a physical product that doesn’t require technological expertise?</p>
        <p>How can we ensure our product encourages, not replaces, further interaction through phone conversation?</p>*/}

        <Quote
          quote = {"How can we create a meaningful yet effortless method of communication between older adults and their younger relatives that facilitates meaningful social connection and encourages phone conversation?"}
        />
{/*        <Quote
          quote = {"How can we accomplish this with a physical product that doesn’t require technological expertise?"}
        />
        <Quote
          quote = {"How can we ensure our product encourages, not replaces, further interaction through phone conversation?"}
        />*/}











{/* RESEARCH */}

{/*Loneliness Among Older Adults -> Worsening Loneliness due to COVID-19 -> Older Adults Interactions with Technology

A study performed by the American Association of Retired Persons (AARP) found that thirty-five percent of adults aged 45 and older are lonely (NASEM). And, unsurprisingly, the vast majority of these individuals who reported feeling lonely were also considered socially isolated (NASEM).

older members of our society are much
more likely to be socially isolated (NASEM)

The average age of retirement in the United States is 60-62 for women and 62-64 for men, which coincides with the spike in loneliness in the 65+ age group found by both the AARP and NASEM studies (Munnell).

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







      </div>

    </div>
  );
}
 
export default OldIsGold;