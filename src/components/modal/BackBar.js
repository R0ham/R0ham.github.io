import React from 'react'; // Import the Component component from React
import {Link, useNavigate} from 'react-router-dom'; // Import the Link component
import {FaChevronLeft} from 'react-icons/fa';
import '../../styles/App.scss';

function BackBar(props) {
  const history = useNavigate();

  return (
    <div>
      <div className="nav_background"></div>

      <Link to="/">
        <div className="back_bar"
          onClick={() => {
            history(-1);
          }}

          // onClick={(e) => {
          //   e.preventDefault();
          //   history.goBack();
          // }}
          // onTouchEnd={(e) => {
          //   e.preventDefault();
          //   history.goBack();
          // }}
        >
          <FaChevronLeft size={30}/>
        </div>
      </Link>


    </div>
  );
}
 
export default BackBar;