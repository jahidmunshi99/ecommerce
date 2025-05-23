import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./CatagoryTab.css";
import { useFetch } from '../../../useHook/useFetch';




const CatagoryTab = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    /**
     * Fetch Data
     */
    const url = 'allCategory.json';
    const items = useFetch({url})
 
  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 750 }}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {
            items.map((item)=>
               
                <Tab  key = {item.id} label={item.category} className='category-item'/>
            )
        }      
      </Tabs>
    </Box>
  )
}

export default CatagoryTab