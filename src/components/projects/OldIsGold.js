import React from 'react';
import BackBar from '../modal/BackBar.js';
import Overview from '../modal/Overview.js';
import Quote from '../modal/Quote.js';

import data from '../../projects.js';
import '../../styles/App.scss';

function OldIsGold(props) {
  const curr_id = 0;
  // const proj = data.projects[curr_id];
  // const imgs = data.projects[curr_id].images[0];

  return (
    <div className="page_modal">

      <BackBar/>

      <div className="content">

        <Overview
          data = {data.projects[curr_id]}
        />


        <h2>Prompt</h2>
        <p>A collaborative experiment very much influenced by the global pandemic. The class was remote for nearly the full duration and team members were physically disparate from each other, with all of us being in our own hometowns. Our only constraint was to choose a current affairs topic as our central theme. Starting research confirmed what we were feeling ourselves, the pandemic was contributing to loneliness.</p>

        <h2>Research</h2>
        <p>research notes + ethnography recreational spaces and libraries</p>


        {/* - brainstorming - */}








{/*        <h2>Research</h2>
        <p>Given the constraint of a current affairs topic. </p>*/}


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




        <h2>Focus Area</h2>
{/*        <p>How can we create a meaningful yet effortless method of communication between older adults and their younger relatives that facilitates meaningful social connection and encourages phone conversation?</p>
        <p>How can we accomplish this with a physical product that doesn’t require technological expertise?</p>
        <p>How can we ensure our product encourages, not replaces, further interaction through phone conversation?</p>*/}

        <Quote
          quote = {"How can we create a meaningful yet effortless method of communication between older adults and their younger relatives that facilitates meaningful social connection and encourages phone conversation?"}
        />
        <Quote
          quote = {"How can we accomplish this with a physical product that doesn’t require technological expertise?"}
        />
        <Quote
          quote = {"How can we ensure our product encourages, not replaces, further interaction through phone conversation?"}
        />

        

        <h2>Concept Generation</h2>
        <p></p>

        <h2>Pivot</h2>
        <p>based on survey</p>

      </div>

    </div>
  );
}
 
export default OldIsGold;