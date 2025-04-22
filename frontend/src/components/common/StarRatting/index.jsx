import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const StarRatting = ({ value, className='' }) => {
  return (
    <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      className={className}
    />
  );
};

export default StarRatting;
