import React from 'react'

export const BreedsImages = ({src}) => {
    return (
    <div className='masonry-item'>
        <img 
            src={src} 
            alt={src}
            className="img-thumbnail animate__animated animate__fadeIn" />
    </div>
  )
}
