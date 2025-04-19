import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FiFilter } from "react-icons/fi";


const MenuTab = ()=> {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>

  

    {/* <Box sx={{ maxWidth: { xs: 320, sm: 750 }}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >              
        <Tab  label='Products' className='category-item'/>
        <Tab  label='Products' className='category-item'/>
        <Tab  label='Products' className='category-item'/>
  
      </Tabs>
    </Box> */}
  </div>
  );
}

export default MenuTab
