import React, { useState } from 'react'
import ProductDetails from './ProductDetails'
import ProductReview from './ProductReview'

const ReviewSection = () => {
  const [ showReview, setShowReview ] = useState(true)


  return (
    <section className='py-10'>
      {/** Review and Product Navigation */}
      <div className=' flex gap-8 items-center py-10 text-[16px] font-[600]'>
        <button onClick={ ()=>{ setShowReview(!showReview)} } className={`cursor-pointer link ${showReview ? 'text-theme' : ''}`}>Description</button>
        <button onClick={()=>{ setShowReview(!showReview)}} className={`cursor-pointer link ${!showReview ? 'text-theme ' : ''}`}>Reviews (3)</button>
      </div>


      {
        showReview ? <ProductDetails details={'details'}/> : <ProductReview/>
      }      
  </section>
  )
}

export default ReviewSection
