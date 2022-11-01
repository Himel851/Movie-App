import React from 'react'
import { useState } from 'react'
import { trending } from '../Data/Data';
import HomeSlider from '../Home/HomeSlider';
import './Trending.css'

const Trending = () => {
    const [items, setItems] = useState(trending);
  return (
    <div>
        <section className='trending'>
          <h2>Trending Movies</h2>
            <HomeSlider items={items} />
        </section>
    </div>
  )
}

export default Trending