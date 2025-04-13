import AddCartButton from '../AddCartButton';
import { Link } from 'react-router';
import StarRatting from '../StarRatting';



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
      <div className='w-[100%] rounded-[6px] bg-base-10 shadow-sm'>
        {/** Product Image */}
        <figure className='!h-[250px] w-[100%] overflow-hidden'>
          <img className='overflow-hidden object-top rounded-t-[6px]' src={item.images[0]} alt="" />
        </figure>

        {/** Product Details */}
        <div className="p-4 flex flex-col">
          {/* Category */}
            <p className="text-xs uppercase text-start text-gray-500">{item.category}</p>

          {/* Title */}
          <h2 className="text-start text-[14px] font-[500] py-2 link">
            <Link to="#">{ title() }</Link>
          </h2>

          {/* Ratings */}
          <div className="flex items-center space-x-1 text-yellow-400">
            <StarRatting value={2.5}/>
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





