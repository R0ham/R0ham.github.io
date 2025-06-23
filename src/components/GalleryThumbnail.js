import React, { useCallback, useState, useLayoutEffect } from 'react'

import {Link} from 'react-router-dom'; // Import the Link component

import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

import '../styles/App.scss';



function GalleryThumbnail(props) {

  const CustomZoomContent = ({
    buttonUnzoom, // default unzoom button
    modalState,   // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
    img,          // your image, prepped for zooming
    //onUnzoom,   // unused here, but a callback to manually unzoom the image and
                  //   close the modal if you want to use your own buttons or
                  //   listeners in your custom experience
  }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useLayoutEffect(() => {
      if (modalState === 'LOADED') {
        setIsLoaded(true)
      } else if (modalState === 'UNLOADING') {
        setIsLoaded(false)
      }
    }, [modalState])

    const classCaption = isLoaded
      ? 'zoom-caption zoom-caption--loaded'
      : 'zoom-caption'

    return <>
      {buttonUnzoom}

      <figure className="caption">
        <h3>{props.title}</h3>
        {img}
        <figcaption className={classCaption}>
          {props.tagline}
        </figcaption>
      </figure>
    </>
  }

  return (
    <li className="canvas project">
        {/*<img className="project_image" src={props.image} alt={props.title}/>*/}
        <Zoom ZoomContent={CustomZoomContent}>
          <img
            className="project_image"
            src={props.image}
            alt={props.title}
            // width="500"
          />
        </Zoom>
        <div className="overlay"></div>
{/*      <Link to={props.link}>
      </Link>*/}
    </li>
  );

}



export default GalleryThumbnail;







// export const MyImg = () => (
//   <Zoom ZoomContent={CustomZoomContent}>
//     <img
//       alt="That Wanaka Tree, New Zealand by Laura Smetsers"
//       src="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
//       width="500"
//     />
//   </Zoom>
// )

// const CustomZoomContent = ({
//   buttonUnzoom, // default unzoom button
//   modalState,   // current state of the zoom modal: UNLOADED, LOADING, LOADED, UNLOADING
//   img,          // your image, prepped for zooming
//   //onUnzoom,   // unused here, but a callback to manually unzoom the image and
//                 //   close the modal if you want to use your own buttons or
//                 //   listeners in your custom experience
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false)

//   useLayoutEffect(() => {
//     if (modalState === 'LOADED') {
//       setIsLoaded(true)
//     } else if (modalState === 'UNLOADING') {
//       setIsLoaded(false)
//     }
//   }, [modalState])

//   const classCaption = isLoaded
//     ? 'zoom-caption zoom-caption--loaded'
//     : 'zoom-caption'

//   return <>
//     {buttonUnzoom}

//     <figure>
//       {img}
//       <figcaption className={classCaption}>
//         That Wanaka Tree, also known as the Wanaka Willow, is a willow tree
//         located at the southern end of Lake Wānaka in the Otago region of New
//         Zealand.
//       </figcaption>
//     </figure>
//   </>
// }