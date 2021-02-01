import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import ScrollToTop from '../ScrollToTop.js';

import '../../styles/App.scss';
 
function Overview(props) {
  const roles = props.role.map(each => (
    <p>{each}</p>
  ));

  const max_width = Math.ceil({roles}.clientWidth);
  // alert(max_width);

  return (
    <div>
      <ScrollToTop/>

      <div className="canvas">
        <img src={props.image} alt={props.title}/>
      </div>

      <ul className="flex_overview">
        <li style={{width: max_width + "px"}}>
          <h3>Context</h3>
          <p>{props.context}</p>
        </li>        
        <li style={{width: max_width + "px"}}>
          <h3>Makeup</h3>
          <p>{props.org}</p>
        </li>
        <li style={{width: max_width + "px"}}>
          <h3>Timeframe</h3>
          <p>{props.timeframe}</p>
        </li>
        <li style={{width: max_width + "px"}}>
          <h3>Role</h3>
          {roles}
        </li>
      </ul>

      <div className="overview">
        <h1>{props.title}</h1>
        <p className="tagline">{props.tagline}</p>
        <p>{props.overview}</p>
      </div>

    </div>

  );
}

export default Overview;