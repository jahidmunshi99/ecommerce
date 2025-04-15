import React, { useState } from 'react'
import UserSidebar from './UserSidebar'
import Sidebar from '../../../components/SharedComponent/Sidebar'
import MainContent from '../../../components/SharedComponent/MainContent'
import UserDisplay from './UserDisplay'


const UserDashboard = () => {

  const [activeTab, setActiveTab] = useState('profile')

  const menuControl = {
    activeTab, 
    setActiveTab
  }

  return (
    <section className='bg-gray-100 py-10'>
      <div className='container flex flex-col md:flex-row gap-5 items-start'>
        {/** Left Side */}
        <Sidebar>
          <UserSidebar menuControl={menuControl}/>
        </Sidebar>

        {/** Right Side */}
        <MainContent>
          <UserDisplay menuControl={menuControl}/>
        </MainContent>
      </div>
    </section>

  )
}

export default UserDashboard