import React from 'react'
import Profile from '../components/Profile';
import Banner from '../components/Banner';
import ItemList from '../components/ItemList';
import Restaurants from '../components/Restaurants';
import {POPULAR, FOODS} from '../data/DataHelper';

function Home() {
  const itemData = []
    POPULAR.forEach(id => {
        FOODS.forEach(item => {
            if(item.id == id)
            itemData.push(item);
        });
    });
  return (
    <>
        <Profile />
        <Banner />
        <ItemList option={{seeMore:true}} itemData={itemData} title={'Popular'}/>
        <Restaurants />
    </>
  )
}

export default Home