import React from 'react'

const PostCard = ({src, title, details}) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white relative">
      {/* Card Image */}
      <img className="w-full transition-all hover:scale-105 hover:rotate-1 rounded-t-[5px] cursor-pointer" src={src} alt="Card Image" />
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 link cursor-pointer">{title}</h2>
        <p className="text-gray-600 mt-2">
          {details}
        </p>
        
        {/* Read More Button */}
        <button className="mt-4 px-4 py-2 rounded-lg link transition cursor-pointer">
          Read More
        </button>
      </div>

      {/* Clock with Time (Bottom Right) */}
      <div className="absolute bottom-2 right-2 flex items-center text-gray-500 text-sm">
        <span className="ml-1">10:30 AM</span>
      </div>
    </div>
  )
}

export default PostCard
