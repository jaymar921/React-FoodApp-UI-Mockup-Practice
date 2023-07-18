import React from 'react'
import './Components.css'

function Restaurants() {
  return (
    <div className='restaurants-container'>
        <div className='header flex'>
            <h3>Restaurants</h3>
            <a className='right marginTop-25' href='#'>See More</a>
        </div>
        <div className='resto-itemlist'>
            <div className='resto-item'>
                <div>
                    <div className='overlay-dark'></div>
                    <img src={require('../assets/Restaurants/Filipino Cafe.jpg')}/>
                    <h2>Filipino Restaurant</h2>
                </div>
                <p>Tinola, Tocino, Humba</p>
            </div>
            <div className='resto-item'>
                <div>
                    <div className='overlay-dark'></div>
                    <img src={require('../assets/Restaurants/Japanese Restaurant.jpg')}/>
                    <h2>Japanese Restaurant</h2>
                </div>
                <p>Ramen, Sushi</p>
            </div>
            <div className='resto-item'>
                <div>
                    <div className='overlay-dark'></div>
                    <img src={require('../assets/Restaurants/Chinese Restaurant.jpg')}/>
                    <h2>Chinese Restaurant</h2>
                </div>
                <p>Chinese food</p>
            </div>
        </div>
    </div>
  )
}

export default Restaurants