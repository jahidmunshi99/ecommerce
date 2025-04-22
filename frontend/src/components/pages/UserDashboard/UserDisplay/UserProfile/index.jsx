import React from 'react'
import Button from '../../../../common/Button'
import TextField from '@mui/material/TextField';

const UserProfileInfo = () => {
  return (
    <div className='card bg-white w-full md:w-[70%] p-5 shadow-md rounded-md mb-5'>
        {/** Top Header */}
        <div className='flex items-center pb-3 font-[600]'>
            <h2 className='pb-0'>My Profile</h2>
            <button className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !ml-auto css-iyey26'>Change Password</button>
        </div>
        <hr className='text-gray-200' />
        {/** Input Form */}
        <form action="" className='mt-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5'>
              <TextField id="outlined-basic" label="Fill Name" variant="outlined" />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Phone" variant="outlined" />
            </div>
            <Button btn={'Update Profile'}/>
        </form>

    </div>

  )
}

export default UserProfileInfo