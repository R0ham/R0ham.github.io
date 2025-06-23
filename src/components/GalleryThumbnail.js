import React, { useCallback, useState, useLayoutEffect } from 'react'
import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

import '../styles/App.scss';





export const MyImg = () => (
  <Zoom ZoomContent={CustomZoomContent}>
    <img
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src="https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D"
      width="500"
    />
  </Zoom>
)

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

    <figure>
      {img}
      <figcaption className={classCaption}>
        That Wanaka Tree, also known as the Wanaka Willow, is a willow tree
        located at the southern end of Lake Wānaka in the Otago region of New
        Zealand.
        <cite className="zoom-caption-cite">
          Wikipedia, <a className="zoom-caption-link" href="https://en.wikipedia.org/wiki/That_Wanaka_Tree">
            That Wanaka Tree
          </a>
        </cite>
      </figcaption>
    </figure>
  </>
}