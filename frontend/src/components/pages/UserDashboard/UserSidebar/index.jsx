import React from 'react'

const UserSidebar = () => {
  return (
    <aside className='card bg-white shadow-md rounded-md sticky top-[160px]'>
        <div className='w-full p-5 flex items-center justify-center flex-col'>
            <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200'>
                <img className='w-full h-full object-cover' src="" alt="image" />
            </div>
            <h3>Test User</h3>
            <h6 className='text-[13px] font-[500]'>useemail@gmail.com</h6>
        </div>
        <div className='bg-[#f1f1f1] myAccountTabs w-full'>            
            <ul className='list-none p-5'>
                <li className='w-full'><button className='font-[600]'>My Profile</button></li>
                <li className='w-full'><button className='font-[600]'>Address</button></li>
                <li className='w-full'><button className='font-[600]'>My List</button></li>
                <li className='w-full'><button className='font-[600]'>My Orders</button></li>
                <li className='w-full'><button className='font-[600]'>Logout</button></li>
            </ul>
        </div>
    </aside>
  )
}

export default UserSidebar