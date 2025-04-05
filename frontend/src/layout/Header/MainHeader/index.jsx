import React from 'react'
import { Link } from 'react-router'
import Search from '../../../components/Search'
import NavLoginPanel from './NavLoginPanel'

const MainHeader = () => {
  return (
    <div className='bg-white'>
      <div className='container'>
          <div className='flex justify-between items-center py-6'>
              {/* Left Coloum */}
              <div className='col_1 w-[30%]'>
                  <Link to={"/"}>
                      <img src="src/assets/logo.jpg" alt="logo" />
                  </Link>
              </div>
              
              {/* Center Coloum */}
              <div className='searchbox col_1 w-[40%]'>
                <Search/>
              </div>

              {/* Right Coloum */}
              <div className='col_1 w-[30%]'>
                <NavLoginPanel/>
              </div>
          </div>
      </div>
    </div>

  )
}

export default MainHeader;