import React from 'react';
import { Outlet } from "react-router";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const MainLayout = () => {
  return (
    <div className='flex justify-start items-start text-amber-50 overflow-hidden'>
      {/** Sidebar */}
      <div className='sidebar w-[20%] max-h-screen'>
        <Sidebar />
      </div>
      <div className='right w-[80%] max-h-screen'>
        <div className='flex flex-col'>
          {/** Main Header */}
          <div>
            <Header />
          </div>
          {/** Dashboard Contents */}
          <main className='p-6'>
            <Outlet />
          </main>
        </div>
      </div>        
    </div>
  );
};

export default MainLayout;
