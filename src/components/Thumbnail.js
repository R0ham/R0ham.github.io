import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../styles/App.scss';
 
function Thumbnail(props) {
  return (
    <li className="canvas project">
      <Link to={props.link}>
        <img className="project_image" src={props.image} alt={props.title}/>
        <div className="overlay"></div>

        <ul className="project_flex">
          <li>
            <h2 className="project_title">{props.title}</h2>          
          </li>
          <li>
            <p className="project_tagline">{props.tagline}</p>
          </li>
        </ul>

      </Link>
    </li>
  );
}

export default Thumbnail;