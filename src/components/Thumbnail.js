import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../styles/App.scss';
 
function Thumbnail(props) {
  return (
    <li key={props.link} className="canvas project">
      <Link to={props.link}>
        <img className="project_image" src={props.image} alt={props.title}/>
        <div className="overlay"></div>

        <ul className="project_flex">
          <li className="project_title">
            <h2>{props.title}</h2>          
          </li>
          <li className="project_tagline">
            <p>{props.tagline}</p>
          </li>
        </ul>

      </Link>
    </li>
  );
}

export default Thumbnail;