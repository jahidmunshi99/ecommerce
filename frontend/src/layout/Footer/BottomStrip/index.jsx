import React from 'react'
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinFill } from "react-icons/ri";
import { FaPaypal } from "react-icons/fa";
import { SiWise } from "react-icons/si";

const BottonStrip = () => {
  return (
    <div className='py-4 border-t-1 border-t-gray-200'>
        <div className="container">
            <div className="flex justify-between items-center">
                {/* Social Media icons */}
                <div className="col_1">
                    <ul className='list-none flex justify-end items-center gap-5 w-full text-xl'>
                        {/* Facebook */}
                        <li className='list-none  w-[40px] h-[40px] border primary-hover transition-all rounded-full border-[rgba(0,0,0,0.1)] flex items-center justify-center text-center hover:bg-primary'>
                            <Link className='' to={"/cart"}>
                                <FaFacebookF/>
                            </Link>
                        </li>
                        {/* YouTube */}
                        <li className='list-none  w-[40px] h-[40px] border primary-hover transition-all rounded-full border-[rgba(0,0,0,0.1)] flex items-center justify-center text-center hover:bg-primary'>
                            <Link className='' to={"/cart"}>
                                < AiOutlineYoutube/>
                            </Link>
                        </li>
                        {/* Twitter */}
                        <li className='list-none  w-[40px] h-[40px] border primary-hover transition-all rounded-full border-[rgba(0,0,0,0.1)] flex items-center justify-center text-center hover:bg-primary' >
                            <Link className = '' to = {"/cart"}>
                                <CiTwitter/>
                            </Link>
                        </li>
                        {/* Linkedin */}
                        <li className='list-none w-[40px] h-[40px] border primary-hover transition-all rounded-full border-[rgba(0,0,0,0.1)] flex items-center justify-center text-center hover:bg-primary' > <Link className = '' to = {"/cart"}>
                                <RiLinkedinFill/>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright information */}
                <div className="col_2">
                    <div>
                        <p>&copy; {new Date().getFullYear()} - ProgHive | Designed By: Jahid Munshi</p>
                    </div>
                </div>

                {/* Supported Paymoent methord */}
                <div className="col_3">
                    <div >
                        <ul className="flex justify-end items-center text-2xl gap-4">
                            <li className='list-none'>
                                <Link to={'/'}><FaPaypal/></Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/'}><SiWise /></Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/'}><SiWise /></Link>
                            </li>
                            <li className='list-none'>
                                <Link to={'/'}><SiWise /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottonStrip
