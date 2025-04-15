import React from 'react'
import UserSidebar from './UserSidebar'
import UserMain from './UserMain'
import UserProfileInfo from './UserSidebar/UserProfile'

const UserDashboard = () => {
  return (
    <section className='bg-gray-100 py-10'>
      <div className='container flex flex-col md:flex-row gap-5 items-start'>
        <div className='col1 w-full md:w-[30%] lg:w-[20%]'>
          <UserSidebar/>
        </div>
        <div className='col2 w-full md:w-[70%] lg:w-[50%]'>
          <UserMain/>
          <UserProfileInfo/>
        </div>
      </div>
    </section>

  )
}

export default UserDashboard