import React, { useState } from 'react'
import AddCartButton from '../../SharedComponent/AddCartButton';

const ProductPage = () => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 bg-white">
      {/* Left Side - Images */}
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

      {/* Right Side - Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Men Comfort Cuban Collar Solid Polycotton Casual Shirt
        </h2>
        <p className="text-sm text-gray-500 mb-1">
          Brands: <span className="text-black font-medium">Campus Sutra</span>
        </p>
        <div className="flex items-center gap-1 mb-3">
          <div className="text-yellow-400 text-lg">★★★★★</div>
          <span className="text-gray-600 text-sm">Review (3)</span>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <span className="line-through text-gray-500">₹1850</span>
          <span className="text-red-600 font-bold text-xl">₹2200</span>
          <span className="text-green-600">Available In Stock: <b>8524 Items</b></span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="mb-4">
          <span className="mr-2 text-sm font-medium text-gray-700">SIZE:</span>
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              className="px-3 py-1 border border-gray-300 rounded mr-2 hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-3">Free Shipping (Est. Delivery Time 2-3 Days)</p>

        <div className="flex items-center gap-3 mb-4">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <div>
            <AddCartButton/>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-black">
            ❤️ Add to Wishlist
          </button>
          <button className="flex items-center gap-1 hover:text-black">
            📊 Add to Compare
          </button>
        </div>
      </div>
    </div>
  );

}

export default ProductPage