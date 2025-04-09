import React from 'react'

const SectionTitle = ({title, className=""}) => {
  return (
    <div className={`font-[600] text-xl ${className}`}>
      {title}
    </div>
  )
}

export default SectionTitle
