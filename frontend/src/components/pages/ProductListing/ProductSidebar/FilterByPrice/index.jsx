import React from 'react'
import SidebarTitle from '../../../../SharedComponent/SidebarTitle'
import RangeSlider from '../../../../SharedComponent/RangeSlider'

const FilterByPrice = () => {
  return (
    <div className='py-6'>
      <SidebarTitle title={'FilterByPrice'}/>
      <div className='px-2 mt-4'>
        <RangeSlider/>
      </div>
    </div>
  )
}

export default FilterByPrice