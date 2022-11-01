import React from 'react'
import { useState } from 'react'
import { latest, upcome, recommended } from '../Data/Data'
import Upcomming from '../Upcomming/Upcomming'
import HomePage from './HomePage'
import '../Upcomming/Upcomming.scss'
import Trending from '../Trending/Trending'

const Home = () => {
    const [items, setItems] = useState(upcome);
    const [item, setItem] = useState(latest);
    const [recom, setRecom] = useState(recommended);
  return (
    <div>
        <HomePage />
        <Upcomming items={items} title="Upcomming Movies" />
        <Upcomming items={item} title="Latest Movies" />
        <Trending />
        <Upcomming className='upcoming' items={recom} title="Recommended Movies" />


    </div>
  )
}

export default Home