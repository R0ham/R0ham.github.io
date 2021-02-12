import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import Image from './Image.js';

import '../../styles/App.scss';
 
function ImageGridHorizontal(props) {
  const images = props.images.map(each => (
    <Image
      image = {each.image}
      alt = {each.alt}
    />
  ));

  // if (props.images.length > 1) {
  //   alert("hi");
  //   // const output = <ul className="canvas_horizontal">{images}</ul>;
  // }

    // for (var i = Things.length - 1; i >= 0; i--) {
    //   Things[i]
    // }

  return (
    <ul className="canvas_horizontal">
      {images}
    </ul>
  );
}

export default ImageGridHorizontal;