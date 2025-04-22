import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SidebarTitle from '../../../../common/SidebarTitle'
import StarRatting from '../../../../common/StarRatting';


const FilterByRating = () => {
  const rattings = [5,4,3,2,1]
  return (
    <div className='py-6'>
        <SidebarTitle title={'FilterByRating'}/>

        {/** Rattings Box */}
        <div className="box overflow-y-auto bg-white mt-2">
          <FormGroup>
            { 
              rattings.map(value=> (
                <FormControlLabel control={<Checkbox />} label={<StarRatting value={value} className='!text-xl'/>} />
              ))
            }

          </FormGroup>
        </div>
    </div>
  )
}

export default FilterByRating