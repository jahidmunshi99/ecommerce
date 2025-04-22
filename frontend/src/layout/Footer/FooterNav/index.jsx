import React from 'react'
import { Link } from 'react-router'
import { IoChatboxOutline } from "react-icons/io5";
import Button from "../../../components/common/Button"


const FooterNav = () => {
  return (
    <div className='py-8 border-t-[1px] border-t-gray-200 bg-white'>
        <div className="container">
            <div className='flex flex-col sm:flex-row  justify-between gap-4'>
                {/** Contact Information */}
                <div className="w-full md:w-1/2 lg:w-[25%] border-r-1 border-r-gray-200">
                    <div className='text-[18px] font-[600]'>Contact us</div>
                    <div className='mt-3'>
                        <div>
                            <p>Classyshop - Mega Super Store <br />
                                507-Union Trade Centre France</p>
                        </div>
                        <div className='py-4'>support@proghive.com</div>
                        <div className='text-xl font-[600] text-theme pt-6 pb-5'>(+88) 01712-413-335</div>
                        <div className='flex items-center'>
                            <IoChatboxOutline className='text-5xl mr-3 text-theme' />
                            <div className='text-[16px] font-[600]'>Online Chat <br />
                            Get Expert Help</div>

                        </div>
                    </div>
                    
                </div>

                {/** Product Information */}
                <div className="w-full md:w-1/2 lg:w-[20%]">
                    <div className='text-[18px] font-[600]'>Products</div>
                    <div className='mt-3'>
                        <ul>
                            <li className='list-none py-1'><Link className='link' to="#">Prices drop</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">New products</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Best sales</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Sitemap</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Stores</Link></li>
                        </ul>
                    </div>
                </div>

                {/** Our company Information */}
                <div className="w-full md:w-1/2 lg:w-[20%]">
                    <div className='text-[18px] font-[600]'>Our company</div>
                    <div className='mt-3'>
                        <ul>
                            <li className='list-none py-1'><Link className='link' to="#">Delivery</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Legal Notice</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Terms and conditions of use</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Secure payment</Link></li>
                            <li className='list-none py-1'><Link className='link' to="#">Login</Link></li>
                        </ul>  
                    </div>
                </div>

                {/** newsletter */}
                <div className="w-full md:w-1/2 lg:w-[35%]">
                    <div className='text-[18px] font-[600]'>Subscribe to newsletter</div>
                    <div className='mt-3'>
                        <p>Subscribe to our latest newsletter to get news about special discounts.</p>
                    </div>
                    {/** Subscription Form */}
                    <form action="" method='POST' className='mt-8'>
                        <input type="email" name="email" className='w-full rounded-[3px] border-1 outline-0 border-gray-400 p-2' />
                        <div className='mt-3'>
                            <Button btn={"Subscribe"}/>
                        </div>
                    </form>
                    <div className='flex items-center gap-2 mt-3'>
                        <input type="checkbox" className='scale-130' name='agree' id="agree" />
                        <label name="agree">I agree to the terms and conditions and the privacy policy</label>
                    </div>
                </div>
                            
            </div>
        </div>
    </div>

  )
}

export default FooterNav