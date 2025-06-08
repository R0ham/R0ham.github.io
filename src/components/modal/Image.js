import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import Zoom from 'react-medium-image-zoom'

import '../../styles/App.scss';
 
function Image(props) {
  // var classes = "canvas canvas_large";
  // if (props.single) {
  //   var classes = "canvas canvas_full canvas_large";
  // }

  return (
    <li className="canvas">
      <Zoom
        // canSwipeToUnzoom={false}
        // swipeToUnzoomThreshold={8}
        // zoomMargin={20}
      >
        <img src={props.image} alt={props.alt}/>
      </Zoom>
    </li>
  );
}

export default Image;