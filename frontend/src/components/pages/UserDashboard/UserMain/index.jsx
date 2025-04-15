import React from 'react'

const UserMain = () => {
  return (
      <div className='card bg-white p-5 shadow-md rounded-md mb-5'>
          <div className='flex items-center pb-3'>
              <h2 className='font-[600]'>Address</h2>
          </div>
          <div className='flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer'>
              <span className='text-[14px] font-[500]'>Add Address</span>
          </div>
          {/** After Added Information */}
          <div className='flex gap-2 flex-col mt-4'>
            <div className='group relative border border-dashed border-[rgba(0,0,0,0.2)] addressBox w-full  bg-[#fafafa] p-4 rounded-md cursor-pointer'>
              <span className='inline-block p-1 bg-[#e7e7e7] text-[12px] rounded-sm'>Home</span>
              <h4 className='pt-2 flex items-center gap-4 text-[14px]'>
                <span>testuser</span>
                <span>+ 917897898978</span>
              </h4>
              <span className='pt-0 text-[13px] block w-100'>sxyss safsda india sfdsdf 4545</span>
              <div className='absolute top-[20px] right-[20px]'>
                <button className='MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-auoq4t'>...</button>
              </div>
            </div>
          </div>
      </div>

  )
}

export default UserMain