import React from 'react'

const MainContent = ({ children }) => {
  return (
    <main className="rightContent w-full lg:w-[80%]">
        {children}
    </main>
  )
}

export default MainContent