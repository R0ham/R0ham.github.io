import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component

import '../../styles/App.scss';
 
function ImageGridVertical(props) {
  return (
    <ul className="canvas_grid">

      <li className="canvas">
        <img src={props.image1} alt={props.alt1}/>    
      </li>
      <li className="canvas">
        <img src={props.image2} alt={props.alt2}/>
      </li>
      <li className="canvas">
        <img src={props.image3} alt={props.alt3}/>
      </li>

    </ul>
  );
}

export default ImageGridVertical;