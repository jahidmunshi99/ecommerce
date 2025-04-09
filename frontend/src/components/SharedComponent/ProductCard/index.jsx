import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AddCartButton from '../AddCartButton';
import { Link } from 'react-router';


const ProductCard = ({item}) => {

  const title = ()=>{
    const name = item.product_name;

    if( name.length > 20 ){
      const display = name.slice(0,20)
      return display + "..."
    }else{
      return name
    }
  }

  return (
      <div className="card rounded-[6px] bg-base-100 w-96 shadow-sm">
        {/* Image Section */}
        <figure className='h-[200px]'>
          <img
            src={item.images[0]}
            alt={item.product_name} 
            className="relative overflow-hidden object-top rounded-t-[6px]"
            />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {item.discount}%
          </div>
        </figure>
        {/* Content Section */}
        <div className="card-body p-4 flex flex-col">
          {/* Category */}
          <p className="text-xs uppercase text-start text-gray-500">{item.category}</p>
          {/* Title */}
          <h2 className="text-start text-[14px] font-[500] py-2 link">
            <Link to="#">
            { title() }           
            </Link>
          </h2>
          {/* Ratings */}
          <div className="flex items-center space-x-1 text-yellow-400">
            <Stack spacing={1}>
              <Rating className='!text-xl' name="half-rating-read" defaultValue={2.5} precision={item.ratings} readOnly />
            </Stack> 
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between space-x-2 py-4">
            <span className="line-through text-gray-400 text-[15px] font-[600]">${item.price}</span>
            <span className="text-[15px] font-[600] text-red-600">
              ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
            <AddCartButton to={'#'}/>
        </div>
      </div>
   );
};

export default ProductCard;





