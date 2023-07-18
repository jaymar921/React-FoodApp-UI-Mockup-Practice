import React from 'react'

function Categories({change}) {
  return (
    <div className='categories'>
        <div onClick={()=>{change('breakfast')}}>
            <img src={require('../assets/Category/breakfast.png')}/>
            <p>Breakfast</p>
        </div>
        <div onClick={()=>{change('burger')}}>
            <img src={require('../assets/Category/burger.png')}/>
            <p>Burger</p>
        </div>
        <div onClick={()=>{change('bbq')}}>
            <img src={require('../assets/Category/bbq.png')}/>
            <p>BBQ</p>
        </div>
        <div onClick={()=>{change('salad')}}>
            <img src={require('../assets/Category/salad.png')}/>
            <p>Salad</p>
        </div>
        <div>
            <img src={require('../assets/Category/sisig.png')}/>
            <p>Sisig</p>
        </div>
    </div>
  )
}

export default Categories