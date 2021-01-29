import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import { FaChevronLeft } from 'react-icons/fa';
import '../../styles/App.scss';

function BackBar(props) {
  return (
    <Link to="/">
      <div className="back_bar">
        <FaChevronLeft size={30}/>
      </div>
    </Link>
  );
}
 
export default BackBar;