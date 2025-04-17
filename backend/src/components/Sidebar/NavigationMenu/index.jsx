import { Button } from '@mui/material';
import React from 'react'
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BiPlug } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { MdPages } from "react-icons/md";
import { MdOutlineCampaign } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { PiSubtractFill } from "react-icons/pi";
import { LuAlignEndVertical } from "react-icons/lu";









import './style.css'




const NavigationMenu = () => {
  return (
    <div className='sidebarmenu'>
        <ul className='list-none w-full'>
            {/** Dashboard */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <IoGridOutline className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Dashboard</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>                
            </li>

            {/** Ecommerce */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <FaOpencart className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Ecommerce</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>

            {/** Users */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <FaRegUser className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Users</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>

            {/** Utility */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <PiSubtractFill className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Utility</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
            </li>

            {/** Authentication */}
            <li className='w-[100%]'>
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <MdPages className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Authentication</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
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
                <Button className='menubtn flex justify-between items-center w-full gap-3 '>
                    <div className="flex items-center space-x-2 w-full">
                        <MdOutlineCampaign className="text-xl text-gray-300" />
                        <span className="capitalize text-gray-300">Campaigns</span>
                    </div>
                    <IoIosArrowDown className="capitalize text-gray-300"/>     
                </Button>
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