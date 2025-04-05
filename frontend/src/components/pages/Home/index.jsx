import React from 'react'
import HeroSlider from './HeroSlider'
import CategorySlider from './CategorySlider'
import FreeShipping from './FreeShipping'
import Blog from './Blog'
import ProductAdSlider from './ProductAdSlider'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <CategorySlider/>
      <ProductAdSlider/>
      <FreeShipping/>
      <Blog/>
    </div>
  )
}

export default Home
