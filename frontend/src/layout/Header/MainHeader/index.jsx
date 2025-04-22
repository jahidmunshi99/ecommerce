import React, { useState } from 'react'
import { Link } from 'react-router'
import NavLoginPanel from './NavLoginPanel'
import Container from '../../../components/SharedComponent/Container'
import Search from '../../../components/SharedComponent/Search'
import { RiMenu3Fill } from "react-icons/ri";
import MainMenuPanel from '../Navigation/SideMenuPanel'


const MainHeader = () => {

  const [show, setShow] = useState(false)

  // alert( 'result: ' + show )
  
  return (
    <div className='bg-white'>
      <Container className='max-w-screen py-0 md:py-2 px:0 md:px-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 items-center py-6'>            

              {/* Left Coloum */}
              <div className='col-span-1'>
                <Link to={"/"}>
                    <img src="src/assets/logo.jpg" alt="logo" />
                </Link>
              </div>

            {/** Medium and Large Screen Panel */}
              {/* Center Coloum */}
              <div className='hidden md:block md:col-span-1'>
                <Search/>
              </div>

              {/* Right Coloum */}
              <div className='md:col-span-1 hidden md:block'>
                <NavLoginPanel/>
              </div>

            {/** Small Device  */}
              <div className='col-span-1 block md:hidden'>
                <div className='flex justify-end link hoverEffect' onClick={()=>(setShow(!show))}>
                  <RiMenu3Fill className='text-2xl'/>
                </div>
              </div>

          </div>
          {
            show ? <MainMenuPanel /> : ''
          }

      </Container>
    </div>

  )
}

export default MainHeader;