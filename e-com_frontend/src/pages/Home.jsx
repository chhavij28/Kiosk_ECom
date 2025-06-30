import React from 'react'
import { assets } from '../assets/assets'
import './Home.css'

const Home = () => {
  return (
    // Hero component
    <div className="d-flex flex-column flex-sm-row">
        <div id="hero" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#hero" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#hero" data-bs-slide-to="1"></li>
                <li data-bs-target="#hero" data-bs-slide-to="2"></li>
                <li data-bs-target="#hero" data-bs-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={assets.hero_img1} alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={assets.hero_img2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={assets.hero_img3} alt="Third slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={assets.hero_img4} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#hero" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#hero" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
  )
}

export default Home
