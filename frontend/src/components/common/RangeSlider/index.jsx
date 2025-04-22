import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([0, 99]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
      />
      <div className='flex justify-between'>
        <div>
            From <span className='font-[600]'>$ {value[0]}</span>
        </div>
        <div>
            From <span className='font-[600]'>$ {value}</span>
        </div>
      </div>
    </Box>
  );
}
