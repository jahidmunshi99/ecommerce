import React from 'react'

const CurrentProductImages = () => {
  return (
    <div className="flex gap-4">
        <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-20 h-20 rounded overflow-hidden border border-gray-300">
                <img
                src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt="thumb"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 cursor-pointer"
                />
            </div>
            ))}
        </div>
        <div className="w-[400px] h-[500px] rounded overflow-hidden">
            <img
            src="https://serviceapi.spicezgold.com/download/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
            alt="Main Product"
            className="w-full h-full object-cover"
            />
        </div>
    </div>
  )
}

export default CurrentProductImages
