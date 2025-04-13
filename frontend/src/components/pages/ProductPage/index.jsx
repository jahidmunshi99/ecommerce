import React, { useState } from 'react'
import SectionTitle from '../../SharedComponent/SectionTitle';
import LatestProducts from '../Home/LatestProducts';
import ProductReviewSection from './ReviewSection';
import ProductSection from './ProductSection';

const ProductPage = () => {


  return (
    <div className="container">
      <ProductSection/>
      <ProductReviewSection/>


      <section>
        <SectionTitle title={'Related Products'}/>
        <LatestProducts/>
      </section>
    </div>
  );

}

export default ProductPage