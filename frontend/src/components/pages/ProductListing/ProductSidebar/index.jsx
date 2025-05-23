import React from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByRating from './FilterByRating'
import FilterByPrice from './FilterByPrice'
import Sidebar from "../../../common/Sidebar";

const ProductSidebar = () => {
  return (
    <Sidebar>
      <FilterByCategory/>
      <FilterByPrice/>
      <FilterByRating/>
    </Sidebar>
  )
}

export default ProductSidebar