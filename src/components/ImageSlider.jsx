import '../styles/header.css'
import { Slides } from '../data/Slides'
import { useState } from 'react'

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const previousImg = () => {
        currentIndex === 0 ? setCurrentIndex(0) : setCurrentIndex(currentIndex - 1)
    }

    const nextImg = () => {
        currentIndex === (Slides.length - 1) ? setCurrentIndex(Slides.length - 1) : setCurrentIndex(currentIndex + 1)
    }

    return (
        <div style={{background: '#8900ca'}}>
            {currentIndex === 0 ? <i></i> : <i className="fa-sharp fa-solid fa-circle-chevron-left" onClick={previousImg}></i>}
            <img style={{width:'100%'}} src={Slides[currentIndex].src} alt="" />
            {currentIndex === (Slides.length-1) ? <i></i> : <i className="fa-sharp fa-solid fa-circle-chevron-right" onClick={nextImg}></i>}

        </div>
    )
}

export default ImageSlider