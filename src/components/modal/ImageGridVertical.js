import React from 'react'; // Import the Component component from React
// import {Link} from 'react-router-dom'; // Import the Link component
import Image from './Image.js';

import '../../styles/App.scss';
 
function ImageGridVertical(props) {
  // var single_image = false;
  // if (props.images.length == 1) {
  //   single_image = true;
  // }

  const images = props.images.map(each => (
    <Image
      image = {each.image}
      alt = {each.alt}
      // single = {single_image}
    />
  ));

  return (
    <ul className="canvas_vertical">
      {images}
    </ul>
  );
}

export default ImageGridVertical;