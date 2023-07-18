import React from 'react'
import './Components.css';
import Item from './Item';


function ItemList({option, itemData, title}) {
    const {seeMore} = option;
    

  return (
    <div className='itemlist-container'>
        <div className='header flex'>
            <h3>{title}</h3>
            {
                seeMore!=false?<a className='right marginTop-25' href='#'>See More</a>:""
            }
        </div>
        <div className='items-container'>
            {
                itemData.map((item) => {
                    return <Item 
                        key={item.id} 
                        item={item}
                    />
                })
            }
        </div>
    </div>
  )
}

export default ItemList