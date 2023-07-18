import React, { useEffect, useState } from 'react'
import Profile from '../components/Profile'
import { FOODS, CATEGORY } from '../data/DataHelper'
import Categories from '../components/Categories'
import ItemList from '../components/ItemList'

function Menu() {
    const [categories, setCategories] = useState([]);
    const [onSet, setOnSet] = useState(false);

    PopulateData(setCategories, onSet, setOnSet);
    function handleCategory(e){
        const catz = [];
        CATEGORY.forEach(category => {
            if(category.Title.toLowerCase() === e.toLowerCase()){
                category.Groups.forEach(group => {
                    const items = [];
                    FOODS.forEach(item => {
                        if(item.category === category.Title && item.group === group){
                            items.push(item);
                        }
                    })
                    catz.push({
                        Id: Math.floor(Math.random()*1000),
                        Group: group,
                        items
                    })
                })
                setCategories(catz);
            }
        })
    }


  return (
    <>
        <Profile />
        <Categories change={handleCategory} />
        {
            categories.map((c)=> {
                return <ItemList key={c.Id} option={{seeMore:false}} itemData={c.items} title={c.Group}/>
            })
        }
        
    </>
  )
}

function PopulateData(setCategories, onSet, setOnSet){
    if(onSet)
        return;
    let e = 'burger';
    const catz = [];
        CATEGORY.forEach(category => {
            if(category.Title.toLowerCase() === e.toLowerCase()){
                category.Groups.forEach(group => {
                    const items = [];
                    FOODS.forEach(item => {
                        if(item.category === category.Title && item.group === group){
                            items.push(item);
                        }
                    })
                    catz.push({
                        Id: Math.floor(Math.random()*1000),
                        Group: group,
                        items
                    })
                })
                setCategories(catz);
            }
        })
    setOnSet(true);
}

export default Menu