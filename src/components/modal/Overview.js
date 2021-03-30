import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import ScrollToTop from '../ScrollToTop.js';
// import Image from './Image.js';


import '../../styles/App.scss';
 
function Overview(props) {
  const roles = props.role.map(each => (
    <p>{each}</p>
  ));

  // const max_width = Math.ceil({roles}.clientWidth);

  //<li style={{width: max_width + "px"}}>
  //  <h3>Role</h3>
  //  {roles}
  //</li>

  return (
    <div>
      <ScrollToTop/>


      <li className="canvas canvas_page_header canvas_large">
        <img src={props.image} alt={props.alt}/>
      </li>

      <ul className="flex_overview">
        <li>
          <h3>Context</h3>
          <p>{props.context}</p>
        </li>        
        <li>
          <h3>Makeup</h3>
          <p>{props.org}</p>
        </li>
        <li>
          <h3>Timeframe</h3>
          <p>{props.timeframe}</p>
        </li>
        <li>
          <h3>Role</h3>
          {roles}
        </li>
      </ul>

      <div className="color_block">
        <h1>{props.title}</h1>
        <p className="tagline">{props.tagline}</p>
        <p>{props.overview}</p>
      </div>

    </div>

  );
}

export default Overview;