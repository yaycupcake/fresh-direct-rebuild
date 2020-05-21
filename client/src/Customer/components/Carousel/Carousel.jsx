import React, { useState } from 'react'
import './Carousel.scss'

export default function Carousel({ images }) {
  const [mainImg, setMainImg] = useState(images[0])

  const thumbnailClick = (event) => {
    const index = event.target.className.split('-')[2]
    setMainImg(images[index])
  }

  return (
    <div className="product-images">
      <img className='main-img' src={mainImg} alt='' />
      <div className="product-thumbnails">
        {images.map((image, index, imgsArr) => {
          return (
            <React.Fragment key={`product-image-${index}`}>
              <img
                src={image}
                width='100'
                alt=''
                className={`product-image-${index} carousel-img`} 
                onClick={thumbnailClick}
              />
              {imgsArr[index+1] && <div className='thumbnail-vr'></div>}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
