import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import ScrollToTop from '../ScrollToTop.js';
// import Image from './Image.js';
import Zoom from 'react-medium-image-zoom'

import '../../styles/App.scss';
 
function Overview(props) {
  const image = props.data.image;

  const context = props.data.context;
  const org = props.data.org;
  const timeframe = props.data.timeframe;
  const roles = props.data.role.map(each => (
    <p key={each}>{each}</p>
  ));

  const title = props.data.title;
  const tagline = props.data.tagline;
  const overview = props.data.overview;

  // const max_width = Math.ceil({roles}.clientWidth);

  //<li style={{width: max_width + "px"}}>
  //  <h4>Role</h4>
  //  {roles}
  //</li>

  return (
    <div>
      <ScrollToTop/>


      <li className="canvas canvas_page_header">
        <Zoom>
          <img src={image} alt={title}/>
        </Zoom>
      </li>

      <ul className="flex_overview">
        <li>
          <h4>Context</h4>
          <p>{context}</p>
        </li>
        <li>
          <h4>Makeup</h4>
          <p>{org}</p>
        </li>
        <li>
          <h4>Timeframe</h4>
          <p>{timeframe}</p>
        </li>
        <li>
          <h4>Role</h4>
          {roles}
        </li>
      </ul>

      <div className="color_block">
        <h1>{title}</h1>
        <p className="tagline">{tagline}</p>
        <p>{overview}</p>
      </div>

    </div>

  );
}

export default Overview;