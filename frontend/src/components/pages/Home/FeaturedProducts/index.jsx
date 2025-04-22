import React from 'react'
import SectionTitle from '../../../common/SectionTitle'
import Slider from '../../../common/Slider'


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