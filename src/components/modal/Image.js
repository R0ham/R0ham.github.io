import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component

import '../../styles/App.scss';
 
function Image(props) {
  return (
    <div className="canvas canvas_large">
      <img src={props.image} alt={props.caption}/>
    </div>
  );
}

export default Image;