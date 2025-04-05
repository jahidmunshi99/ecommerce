import React from 'react'
import HeroSlider from './HeroSlider'
import HomeCatSlider from './HomeCartSlider'
import FreeShipping from './FreeShipping'
import Blog from './Blog'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <HomeCatSlider/>
      <FreeShipping/>
      <Blog/>
    </div>
  )
}

export default Home
