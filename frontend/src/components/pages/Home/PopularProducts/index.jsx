import React from 'react'
import SectionTitle from '../../../SharedComponent/SectionTitle'
import SectionSubTitle from '../../../SharedComponent/SectionSubTitle'
import CatagoryTab from '../../../SharedComponent/CatagoryTab'

const PropularProducts = () => {
  return (
    <section className='py-10'>
        <div className="container">
            <div className="flex flex-wrap justify-between items-center">
                <div className="col_1 w-full sm:w-auto">
                    <SectionTitle title={'Popular Products'}/>
                    <SectionSubTitle subtitle={'Do not miss the current offers until the end of March.'}/>
                </div>
                <div className="col_2 w-full sm:w-auto">
                    <CatagoryTab/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PropularProducts