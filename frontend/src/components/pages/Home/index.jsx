import React from 'react'
import HeroSlider from './HeroSlider'
import CategorySlider from './CategorySlider'
import FreeShipping from './FreeShipping'
import Blog from './Blog'
import ProductAdSlider from './ProductAdSlider'
import PropularProducts from './PopularProducts'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <CategorySlider/>
      <ProductAdSlider/>
      <PropularProducts/>
      <LatestProducts/>
      <FeaturedProducts/>
      <FreeShipping/>
      <Blog/>
    </div>
  )
}

export default Home
