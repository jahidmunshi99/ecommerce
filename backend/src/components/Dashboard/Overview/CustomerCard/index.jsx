import { FaUsers, FaArrowUp, FaArrowDown } from "react-icons/fa";

const CustomersCards = () => {
  return (
    <div>
      {/* Customers Card */}
        <div className="items bg-[#171F2F] rounded-2xl w-full shadow-lg hover:shadow-purple-800 p-6 shadow-gray-800 border-[1px] border-gray-700 hover:scale-103 transition-all hover:mb-1">
            {/** Icon */}
            <div className="bg-[#1D2939] p-3 rounded-lg inline-block">
                <FaUsers size={22} />
            </div>
            {/** Title */}
            <h2 className="text-gray-400 text-sm my-3">Customers</h2>
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold mt-1">3,782</h3>
                <div className="bg-green-900 text-green-400 text-sm px-2 py-1 rounded-full flex items-center gap-2">
                    <FaArrowUp size={12} /> <span>11.01%</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CustomersCards;
