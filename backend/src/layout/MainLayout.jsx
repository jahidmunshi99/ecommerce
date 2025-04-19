import React from 'react';
import { Outlet } from "react-router";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const MainLayout = () => {
  return (
    <div className='flex justify-start items-start text-amber-50'>
      {/** Sidebar */}
      <div className='sidebar w-[20%]'>
        <Sidebar />
      </div>
      <div className='right w-[80%]'>
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
