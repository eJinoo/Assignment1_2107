import React from 'react'
import './Banner.css';

const hotelImage = "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const Banner = () => {
  return (
    <section className='banner-container'>
        <img src={hotelImage} alt="" />
        <div className='banner-content'>
            <h1 className='banner-title'>British Columbia's Best Tutors</h1>
            <p className='banner-subtitle'>A personal teacher for every need</p>
        </div>
    </section>
  )
}

export default Banner