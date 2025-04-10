import React from 'react'
import HeroSlider from './HeroSlider'
import CategorySection from './CategorySection'
import FreeShipping from './FreeShipping'
import Blog from './Blog'
import ProductAdSection from './ProductAdSection'
import PropularProducts from './PopularProducts'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import CardAdsSection from './CardAdsSection'

const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <CategorySection/>      
      <ProductAdSection/>
      <FreeShipping/>
      <CardAdsSection/>
      <LatestProducts/>
      <FeaturedProducts/>
      <PropularProducts/>
      <CardAdsSection/>
      <Blog/>
    </div>
  )
}

export default Home
