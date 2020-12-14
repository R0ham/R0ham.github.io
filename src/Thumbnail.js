import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Thumbnail(props) {
  return (
    <li className="project">
      <Link to={props.link}>
        <img className="project-image" src={props.image} alt="Project Image"/>
        <div className="overlay">
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;