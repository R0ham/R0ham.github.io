import React from 'react'; // Import the Component component from React
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import '../../styles/App.scss';
 
function Quote(props) {

  return (
    <div className="quote_block">
      {/*<BiSolidQuoteAltLeft className="quote_icon"/>*/}
      <p>{props.quote}</p>
    </div>
  );
}

export default Quote;