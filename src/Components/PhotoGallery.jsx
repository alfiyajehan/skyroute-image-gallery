import React from 'react'
import './PhotoGallery.css';

const PhotoGallery = ({gallery}) => {

  return (
    <div className="gallery mt-[-2%] bg-black m-h-[100vh] p-[5em]">
      {
        gallery.map( image =>(
          <img src={image.src} alt={`img1-${image.id}`} classname="pics "></img>
        ))
      } 

    </div>
  )
}

export default PhotoGallery;