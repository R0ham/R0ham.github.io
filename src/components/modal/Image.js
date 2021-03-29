import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component

import '../../styles/App.scss';
 
function Image(props) {
  // var classes = "canvas canvas_large";
  // if (props.single) {
  //   var classes = "canvas canvas_full canvas_large";
  // }

  return (
    <li className="canvas canvas_large">
      <img src={props.image} alt={props.alt}/>
    </li>
  );
}

export default Image;