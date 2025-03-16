import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import ScrollToTop from '../ScrollToTop.js';
// import Image from './Image.js';


import '../../styles/App.scss';
 
function Overview(props) {
  const image = props.data.image;
  
  const context = props.data.context;
  const org = props.data.org;
  const timeframe = props.data.timeframe;
  // const role = props.data.role;
  const roles = props.data.role.map(each => (
    <p>{each}</p>
  ));

  const title = props.data.title;
  const tagline = props.data.tagline;
  const overview = props.data.overview;

  // const max_width = Math.ceil({roles}.clientWidth);

  //<li style={{width: max_width + "px"}}>
  //  <h3>Role</h3>
  //  {roles}
  //</li>

  return (
    <div>
      <ScrollToTop/>


      <li className="canvas canvas_page_header canvas_large">
        <img src={image} alt={title}/>
      </li>

      <ul className="flex_overview">
        <li>
          <h3>Context</h3>
          <p>{context}</p>
        </li>        
        <li>
          <h3>Makeup</h3>
          <p>{org}</p>
        </li>
        <li>
          <h3>Timeframe</h3>
          <p>{timeframe}</p>
        </li>
        <li>
          <h3>Role</h3>
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