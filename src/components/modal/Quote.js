import React from 'react'; // Import the Component component from React
import '../../styles/App.scss';
 
function Quote(props) {

  return (
    <div className="quote_block">
      {/*<h1>{title}</h1>*/}
      {/*<p className="tagline">{tagline}</p>*/}
      <p>{props.quote}</p>
    </div>
  );
}

export default Quote;