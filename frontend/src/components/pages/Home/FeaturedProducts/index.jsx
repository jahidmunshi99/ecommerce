import React from 'react'
import SectionTitle from '../../../SharedComponent/SectionTitle'
import Slider from '../../../SharedComponent/Slider'


const FeaturedProducts = () => {
  return (
    <>
    <div className="container">
        <SectionTitle title={"Featured Products"} className={'mb-6'}/>
        <Slider/>
    </div>
    </>

  )
}

export default FeaturedProducts