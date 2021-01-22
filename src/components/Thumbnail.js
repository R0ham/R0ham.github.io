import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../styles/App.scss';
 
function Thumbnail(props) {
  return (
    <li className="project">
      <Link to={props.link}>
        <img className="project-image" src={props.image} alt="Project Image"/>
        <div className="overlay">
          <h2 className="project-title">{props.title}</h2>
          <p className="project-tagline">{props.tagline}</p>
        </div>
      </Link>
    </li>
  );
}

export default Thumbnail;