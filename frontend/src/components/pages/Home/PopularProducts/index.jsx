import React from 'react'
import SectionTitle from '../../../common/SectionTitle'
import SectionSubTitle from '../../../common/SectionSubTitle'
import CatagoryTab from '../../../common/CatagoryTab'
import Slider from '../../../common/Slider'

const PropularProducts = () => {
  return (
    <section className='py-10'>
        <div className="container">
            { /** Section Title && Categori Menus */}
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/2 sm:w-auto">
                    <SectionTitle title={'Popular Products'}/>
                    <SectionSubTitle subtitle={'Do not miss the current offers until the end of March.'}/>
                </div>
                <div className="w-full md:w-1/2 sm:w-auto">
                    <CatagoryTab/>
                </div>
            </div>
            {/** Sliders */}
            <div className='mt-10'>
                <Slider/>
            </div>
        </div>
    </section>
  )
}

export default PropularProducts