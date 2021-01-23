import React from 'react';

import data from '../../projects.js';
import '../../styles/App.scss';

import { FaChevronLeft } from 'react-icons/fa';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

function Old_is_Gold(props) {
  const curr_id = 0;
  // alert(this.props.match.params.handle)
  return (
    <div className="page_view">

      <Link to="/">
        <div className="back_bar">
          <FaChevronLeft size={30}/>
        </div>
      </Link>

      <div className="content">
        <img src={data.projects[curr_id].image} alt="Project Image"/>
        <h1>{data.projects[curr_id].title}</h1>
        <p>{data.projects[curr_id].tagline}</p>
      </div>

    </div>
  );
}
 
export default Old_is_Gold;