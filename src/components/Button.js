import React from 'react'
import './Components.css'

function Button({type, size}) {
    const style = type?'+':'fa-magnifying-glass';
  return (
    
    <button className={`btn-primary ${size?'btn-small':'btn-big'}`}>
        <i className={`fa-solid ${style}`}>{type?'+':''}</i>
    </button>
  )
}

export default Button