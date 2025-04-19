import React from 'react'
import CustomersCards from './CustomerCard'
import OrdersCards from './OrdersCard'
import RecentOrders from './RecentOrders'

const Overview = () => {
  return (
    <div className='p-6 overflow-y-scroll max-h-screen'>
        <div className='grid-cols-4 columns-4 gap-6 w-full'>
                <CustomersCards/>
                <OrdersCards/>
                <OrdersCards/>
                <OrdersCards/>
        </div>
        <div className='mt-10'>
            <RecentOrders/>
        </div>
    </div>

  )
}

export default Overview
