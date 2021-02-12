import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import Image from './Image.js';

import '../../styles/App.scss';
 
function ImageGridVertical(props) {
  const images = props.images.map(each => (
    <Image
      image = {each.image}
      alt = {each.alt}
    />
  ));

  return (
    <ul className="canvas_vertical">
      {images}
    </ul>
  );
}

export default ImageGridVertical;