import React from 'react'

const PromoCard = ({item}) => {
  return (
    <div className='overflow-hidden rounded-[10px] group cursor-pointer'>
        <img className='w-full object-fill group-hover:scale-105 group-hover:rotate-1 transition-all' src={item.image} alt={item.titel} />
    </div>
  )
}

export default PromoCard