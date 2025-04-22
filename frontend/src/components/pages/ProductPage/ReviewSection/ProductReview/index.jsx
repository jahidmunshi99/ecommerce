import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import StarRatting from '../../../../common/StarRatting';
import Button from '../../../../common/Button';

const ProductReview = () => {
  return (
    <div className='shadow-none lg:shadow-md w-full sm:w-[80%] py-0 lg:py-5 px-0 lg:px-8 rounded-md'>
        <div className='w-full productReviewsContainer'>
        <h2 className='text-[16px] font-[600] lg:text-[18px]'>Customer questions & answers</h2>
        {/** product Reviews */}
        <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
            <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
            {/** Left */}
            <div className='info w-[80%] flex items-center gap-3'>
                {/** Customers Photo */}
                <div className='img w-[60px] h-[60px] overflow-hidden rounded-full'>
                <img className='w-full' src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" alt="image" />
                </div>
                {/** Customer info */}
                <div className='w-[80%]'>
                <h4 className="text-[16px]">Nina</h4>
                <h5 className='text-[13px] mb-0'>2-08-2015</h5>
                <p className='mt-0 mb-0 text-[13px]'>Good</p>
                </div>
            </div>
            {/** Right */}
            <div>
                <StarRatting value={5}/>
            </div>
            </div>
        </div>

        {/** Customer Review Form */}
        <div className='reviewForm bg-[#fafafa] p-4 rounded-md py-6 mt-8'>
            <h2 className='text-[18px] font-[600]'>Add a review</h2>
            <form action="" className='w-full mt-5'>
            <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={10}
                fullWidth label="Write a review.."/>

            <div className='mt-6'>
                <StarRatting value={5}/>
            </div>
            <div className='flex items-center mt-4'>
                <Button btn={'Submit Review'}/>
            </div>
            </form>
        </div>

        </div>
    </div>
  )
}

export default ProductReview
