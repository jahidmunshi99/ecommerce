import React from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByRating from './FilterByRating'
import FilterByPrice from './FilterByPrice'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className="box">
            <FilterByCategory/>
            <FilterByPrice/>
            <FilterByRating/>
        </div>
    </aside>
  )
}

export default Sidebar