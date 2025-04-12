import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './style.css'


const ContentNav = ({layout, setLayout, items}) => { 
      
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center bg-[rgb(241,241,241)] w-full sm:w-auto p-3 rounded-[5px]'>
            <div className="left-col">
                {/** View Buttons */}
                <div className='filterMenuBtn flex gap-1 items-center'>
                    <IconButton onClick={ ()=> setLayout(false)} className={`!text-[16px] ${ !layout ? 'btnactive' : ''}`}>
                        <AiOutlineMenu />
                    </IconButton>
                    <IconButton onClick={ ()=> setLayout(true)} className={`!text-[16px] ${ layout ? 'btnactive' : ''}`}>
                        <IoGrid />
                    </IconButton>
                    <h4>There are {items.length} products.</h4>
                </div>

                {/** Display Number of Products */}
            </div>
            <div className="right-col">
                <div className='flex items-center gap-3'>
                    <h3>Sort By</h3>
                    <Button className='!bg-white !text-[13px] !capitalize !text-black'>
                        Price, Low To Hight
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContentNav