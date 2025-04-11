import React from 'react'
import SectionTitle from '../../../SharedComponent/SectionTitle'
import Slider from '../../../SharedComponent/Slider'

const LatestProducts = () => {
  return (
    <div className='py-8'>
        <div className="container">
            <SectionTitle title={'Latest Products'} className='mb-7'/>
            <Slider/>
        </div>
    </div>
  )
}

export default LatestProducts