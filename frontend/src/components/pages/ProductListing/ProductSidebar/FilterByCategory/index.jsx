import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SidebarTitle from '../../../../SharedComponent/SidebarTitle'
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useFetch } from '../../../../../useHook/useFetch';
import './style.css'
import { Collapse } from 'react-collapse';


const FilterByCategory = () => {

  const url = "allCategory.json"
  const items = useFetch({url})

  const [ showList, setShowList ] = useState(true)
  
  return (
    <div className='category-filter'>
        {/** Category Title & ShowHide Button */}
        <div className='!text-black gap-4 flex justify-between items-center'>
           <SidebarTitle title={'Shop by Category'}/>  
          <div className='cursor-pointer mt-5' onClick = {()=>{setShowList(!showList)}}>
            { showList ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {/** Display All Category */}
        <Collapse isOpened={showList}>
          <div className="box overflow-y-auto h-[250px] bg-white ">
            <FormGroup>
              {
                items.map((item)=>
                  <FormControlLabel key={item.id} control={<Checkbox />} label={item.category} />
                )
              }
            </FormGroup>
          </div>
        </Collapse>      
    </div>
  )
}

export default FilterByCategory