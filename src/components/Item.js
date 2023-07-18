import React from 'react'
import Button from './Button'
import './Components.css'

function Item({item}) {
    const {Title:title, image, price, discount} = item;
    const fileLink = image.toString();
  return (
    <>
        <div className='item'>
            {
                discount!=null?<div className='item-discount'><p>{discount*100}%</p></div>:''
            }
            <img src={fileLink}/>
            <div className='item-info'>
                <h4>{title}</h4>
                <p><a className='currency'>₱</a>{price}</p>
                <Button type={'add'} size={'small'}/>
            </div>
        </div>
    </>
  )
}

export default Item