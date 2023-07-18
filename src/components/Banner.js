import React from 'react'
import './Components.css';

function Banner() {
  return (
    <div className='banner-container'>
        <div className='flex banner' >
            <div className='banner-info'>
                <h3>Choose your meel</h3>
                <p>Pasta, Pizza, burger, salad</p>
            </div>
            <img src={require('../assets/Category/burger.png')} />
        </div>
    </div>
  )
}

export default Banner