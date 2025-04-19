import React from 'react'
import SectionHead from '../../../common/SectionHead'
import CategoryTable from '../../../Tables/CategoryTable'

const AllCategories = () => {
  return (
    <>
    <SectionHead title={'All Categories'} item1={'Add New Category'}/>
    <CategoryTable/>
    </>
  )
}

export default AllCategories