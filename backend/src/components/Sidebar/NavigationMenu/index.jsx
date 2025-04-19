import { Button } from '@mui/material';
import React, { useState } from 'react'
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdPages } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { PiSubtractFill } from "react-icons/pi";
import { LuAlignEndVertical } from "react-icons/lu";



import './style.css'
import { Link } from 'react-router';




const NavigationMenu = () => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const hanleSubmenu = (menuName)=>{
        setShowSubMenu( (prev)=> (prev === menuName ? null : menuName))
    }

  return (
    <div className='sidebarmenu'>
        <ul className='list-none w-full'>

            {/** Dashboard */}
            <li className='w-[100%]' onClick={()=> (hanleSubmenu('dashboard'))}>
                <Link to='/' >
                    <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                        <div className="flex items-center space-x-2 w-full">
                            <IoGridOutline className="text-xl text-gray-300" />
                            <span className="capitalize text-gray-300">Dashboard</span>
                        </div>
                        {
                            showSubMenu === 'dashboard' ? <IoIosArrowDown className="capitalize text-gray-300"/> : <IoIosArrowUp IoIosArrowDown className="capitalize text-gray-300"/>
                        }    
                    </Button> 
                </Link>               
            </li>

            {/** Ecommerce */}
            <li className='w-[100%]' onClick={()=> {hanleSubmenu('ecommerce')}}>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <FaOpencart className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Ecommerce</span>
                    </div>
                    {
                        showSubMenu === 'ecommerce' ? <IoIosArrowUp className="capitalize text-gray-300"/> : <IoIosArrowDown className="capitalize text-gray-300"/>
                    }
                </Button>

                {/** Submenu */}
                {
                    showSubMenu && (
                    <div className={`pl-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        showSubMenu === 'ecommerce' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="w-full text-sm pl-3 rounded-md">
                            <li className="py-1 cursor-pointer"><Link to={'/admin/ecommerce/category'}>Category</Link></li>
                            <li className="py-1 cursor-pointer"><Link to={'/admin/ecommerce/products'}>Products</Link></li>
                            <li className="py-1 cursor-pointer"><Link to={'/admin/ecommerce/orders'}>Orders</Link></li>
                            <li className="py-1 cursor-pointer">Reports</li>
                            <li className="py-1 cursor-pointer"><Link to={'/admin/ecommerce/customers'}>Customers</Link></li>☻
                            <li className="py-1 cursor-pointer">Settings</li>
                        </ul>
                    </div>
                    ) 
                }
            </li>

            {/** Utility */}
            <li className='w-[100%]' onClick={()=> {hanleSubmenu('utility')}}>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <PiSubtractFill className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Utility</span>
                    </div>
                    {showSubMenu === 'utility' ? <IoIosArrowDown className="capitalize text-gray-300"/> : <IoIosArrowUp className="capitalize text-gray-300" />}     
                </Button>

                {/** Submenu */}
                {
                    showSubMenu && (
                    <div className={`pl-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        showSubMenu === 'utility' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <ul className="w-full text-sm pl-3 rounded-md">
                            <li className="py-1 cursor-pointer">FAQs</li>
                            <li className="py-1 cursor-pointer">404</li>
                            <li className="py-1 cursor-pointer">Maintainance</li>
                        </ul>
                    </div>
                    ) 
                }
            </li>

            {/** Authentication */}
            <li className='w-[100%]' onClick={()=>{ hanleSubmenu('authentication')}}>
                <Link to={'/admin/authentication'}>
                    <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                        <div className="flex items-center space-x-2 w-full">
                            <MdPages className="text-xl text-gray-300" />
                            <span className="capitalize text-gray-300">Authentication</span>
                        </div>
                        { showSubMenu === 'authentication' ? <IoIosArrowDown className="capitalize text-gray-300"/> : <IoIosArrowUp className="capitalize text-gray-300" />}   
                    </Button>
                </Link>
                {/** Submenu */}
                {
                    showSubMenu && (
                    <div className={`pl-5 overflow-hidden transition-all duration-300 ease-in-out ${
                        showSubMenu === 'authentication' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <ul className="w-full text-sm pl-3 rounded-md">
                            <li className="py-1 cursor-pointer">Users</li>
                            <li className="py-1 cursor-pointer">Reset Password</li>
                        </ul>
                    </div>
                    ) 
                }
            </li>

            {/** Community */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <RiUserCommunityLine className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Community</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>


            {/** Finance */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <CiBank className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Finance</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>


            {/** Job Board */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <LuAlignEndVertical className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Job Board</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>
    
            {/** Campaigns */}
            <li className='w-[100%]'>
                <Link to={'/admin/campains'}>
                    <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                        <div className="flex items-center space-x-2 w-full">
                            <MdOutlineCampaign className="text-xl text-gray-300" />
                            <span className="capitalize text-gray-300">Campaigns</span>
                        </div>
                        <IoIosArrowDown className="capitalize text-gray-300"/>     
                    </Button>
                </Link>
            </li>
            

            {/** Users */}
            <li className='w-[100%]'>
                <Link to={'/admin/users'}>
                    <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                        <div className="flex items-center space-x-2 w-full">
                            <FaRegUser className="text-xl text-gray-300" />
                            <span className="capitalize text-gray-300">Users</span>
                        </div>
                        <IoIosArrowDown className="capitalize text-gray-300"/>     
                    </Button>
                </Link>
            </li>


            {/** Settings */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <IoSettingsOutline className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Settings</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>
        </ul>
    </div>
  )
}

export default NavigationMenu