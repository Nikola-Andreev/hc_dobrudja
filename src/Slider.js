import React from 'react'
import { Slide } from 'react-slideshow-image'

const images = [
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
    'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
]

const Slideshow = () => {
    return (
        <Slide
            images={images}
            duration={5000}
            transitionDuration={1000}
        />
    )
}

export default Slideshow