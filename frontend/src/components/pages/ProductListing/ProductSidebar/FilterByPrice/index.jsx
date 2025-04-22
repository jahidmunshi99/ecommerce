import React from 'react'
import SidebarTitle from '../../../../common/SidebarTitle'
import RangeSlider from '../../../../common/RangeSlider'

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