import React from 'react'
import SectionHead from '../../../common/SectionHead'
import UsersTable from '../../../Tables/UsersTable'

const Customers = () => {
  return (
    <>
        <SectionHead title={'All Customers'}/>
        <UsersTable/>
    </>
  )
}

export default Customers