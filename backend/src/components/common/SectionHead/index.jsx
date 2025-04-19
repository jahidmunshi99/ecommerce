import React from 'react'
import SettingMenu from '../SettingMenu'

const SectionHead = ({title, item1, item2, item3}) => {
  const items = {item1, item2, item3}
  return (
    <div className="bg-[#1e293b] rounded-sm px-4 py-2 shadow-lg mb-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className='text-xl'>{title}</h2>
        <SettingMenu items={items}/>
      </div>
    </div>
  )
}

export default SectionHead
