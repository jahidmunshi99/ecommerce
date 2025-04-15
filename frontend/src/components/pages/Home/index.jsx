import React from 'react'
import HeroSlider from './HeroSlider'
import CategoriesSlide from './CategoriesSlide'
import FreeShipping from './FreeShipping'
import Blog from './Blog'
import ProductAdSection from './ProductAdSection'
import PropularProducts from './PopularProducts'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import CardAdsSection from './CardAdsSection'
import BestDealSection from './BestDealSection'

const Home = () => {
  return (
    <div className='theme-body-bg'>
      <HeroSlider/>
      <CategoriesSlide/>      
      <PropularProducts/>
      <ProductAdSection/>
      <FreeShipping/>
      <CardAdsSection/>
      <LatestProducts/>
      <FeaturedProducts/>
      <BestDealSection/>
      <LatestProducts/>
      <Blog/>
    </div>
  )
}

export default Home
