import React from 'react'
import { Link } from 'react-router'

const FooterNav = () => {
  return (
    <div className='py-8 border-t-[1px] border-t-gray-200 bg-white'>
        <div className="container">
            <div className='flex flex-col sm:flex-row  justify-between gap-4'>
                {/** Contact Information */}
                <div className="w-full md:w-1/2 lg:w-1/4 border-r-1 border-r-gray-200">
                    <div className='text-[17px] font-[600]'>Contact us</div>
                    <div>

                    </div>
                    
                </div>

                {/** Product Information */}
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <div className='text-[17px] font-[600]'>Products</div>
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
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <div className='text-[17px] font-[600]'>Our company</div>
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
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <div className='text-[17px] font-[600]'>Subscribe to newsletter</div>
                    <div>
                    </div>
                </div>
                            
            </div>
        </div>
    </div>

  )
}

export default FooterNav