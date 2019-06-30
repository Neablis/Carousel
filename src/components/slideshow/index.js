import React from 'react';
import * as Styles from './results.styled'

const Image = (props) => {
  const {
    description,
    urls,
    likes,
    prev,
    next,
    click,
    id
  } = props
  
  let small = (prev || next)
  
  return (
    <Styles.ImageContainer>
      <Styles.Image 
        key={id}
        onClick={click}
        alt={description}
        src={small ? urls.thumb : urls.full} 
      />
      <div className="description">
        <span>{likes}</span>
      </div>
    </Styles.ImageContainer>
  )
}

const Slideshow = (props) => {
  const {
    prevImage,
    currentImage,
    nextImage,
    next,
    prev
  } = props
    
  return (
    <div className="Slideshow">      
      <Styles.SlideshowContainer>
        {
          prevImage && (
            <Image prev {...prevImage} click={prev} />
          )
        }
        {
          currentImage && (
            <Image current {...currentImage} />
          )
        }
        {
          nextImage && (
            <Image next {...nextImage} click={next} />
          )
        }
      </Styles.SlideshowContainer>
    </div>
  );
}

export default Slideshow;
