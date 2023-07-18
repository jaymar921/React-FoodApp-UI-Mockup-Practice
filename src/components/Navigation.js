import React from 'react'
import './Components.css';

function Navigation({nav}) {
    
  return (
    <div className='navigation'>
        <div>
        <a href='/'><i className="fa-solid fa-house"></i> {nav=='Home'?'Home':''}</a>
        </div>
        <div>
        <a href='/menu'><i className="fa-solid fa-boxes-stacked"></i> {nav=='Menu'?'Menu':''}</a>
        </div>
        <div>
        <a href='/'><i className="fa-solid fa-bag-shopping"></i></a>
        </div>
        <div>
        <a href='/'><i className="fa-solid fa-user"></i></a>
        </div>
    </div>
  )
}

export default Navigation