import { AiFillStar } from 'react-icons/ai';
import AddCartButton from '../AddCartButton';

const ProductCard = ({item}) => {

  return (
      <div
        className="rounded-[10px] w-[247px] overflow-hidden shadow-md hover:shadow-lg transition-all"
      >
        {/* Image Section */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={item.images[0]}
            alt={item.product_name}
            className="w-full object-fill"
          />
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {item.discount}%
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <p className="text-xs text-gray-500">{item.category}</p>

          {/* Title */}
          <h3 className="text-[14px] text-start font-semibold">{item.product_name}</h3>

          {/* Ratings */}
          <div className="flex items-center space-x-1 text-yellow-400">
            <AiFillStar />
            <span className="text-gray-500 text-sm ml-1">({item.ratings})</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-red-600">
              ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
            </span>
            <span className="line-through text-gray-400 text-sm">${item.price}</span>
          </div>

          {/* Add to Cart Button */}
            <AddCartButton to={'#'}/>
        </div>
      </div>
   );
};

export default ProductCard;
