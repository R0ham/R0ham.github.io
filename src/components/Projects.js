import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import hero from '../images/hero_cover_red_hires.jpg'
import '../styles/App.css';
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <ul className="flex_projects">
      <Thumbnail
        link="/one"
        // image={hero}
        image="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
        title="One"
        category="Mobile App"
      />
       
      <Thumbnail
        link="/two"
        image="https://i.redd.it/atj3t9lsui631.jpg"
        title="Two"
        category="Website"
      />
       
      <Thumbnail
        link="/three"
        image="https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
        title="Three"
        category="Desktop App"
      />

      <Thumbnail
        link="/four"
        image="https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D"
        title="Four"
        category="Desktop App"
      />

      <Thumbnail
        link="/five"
        image="https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
        title="Five"
        category="Desktop App"
      />

      <Thumbnail
        link="/six"
        image="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D"
        title="Six"
        category="Desktop App"
      />

      <Thumbnail
        link="/seven"
        image="https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
        title="Seven"
        category="Desktop App"
      />


    </ul>
  )
}
 
export default Projects;