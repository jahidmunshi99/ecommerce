import { FiFilter } from "react-icons/fi";

const orders = [
  {
    product: "Macbook pro 13”",
    variants: "2 Variants",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
    image: "https://i.imgur.com/Ew8W6jP.png",
  },
  {
    product: "Apple Watch Ultra",
    variants: "1 Variants",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
    image: "https://i.imgur.com/rdoP7Cf.png",
  },
  {
    product: "iPhone 15 Pro Max",
    variants: "2 Variants",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
    image: "https://i.imgur.com/XAoypKJ.png",
  },
  {
    product: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
    image: "https://i.imgur.com/BQFlJQ0.png",
  },
  {
    product: "Airpods Pro 2nd Gen",
    variants: "1 Variants",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
    image: "https://i.imgur.com/FsDEEsL.png",
  },
];

const statusColors = {
  Delivered: "bg-green-900 text-green-400",
  Pending: "bg-orange-900 text-orange-400",
  Canceled: "bg-red-900 text-red-400",
};

const AllOrders = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      <div className="bg-[#1e293b] rounded-2xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Orders</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-gray-600 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-700">
              <FiFilter /> Filter
            </button>
            <button className="border border-gray-600 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-700">
              See all
            </button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-600">
          <div>Products</div>
          <div>Category</div>
          <div>Price</div>
          <div>Status</div>
        </div>

        {/* Table Rows */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-4 px-4 py-4 items-center hover:bg-gray-700/50 transition border-b border-gray-700"
          >
            <div className="flex items-center gap-4">
              <img
                src={order.image}
                alt={order.product}
                className="w-12 h-10 rounded-md object-cover bg-white"
              />
              <div className="">
                <p className="font-semibold">{order.product}</p>
                <p className="text-xs text-gray-400">{order.variants}</p>
              </div>
            </div>
            <div className="text-sm">{order.category}</div>
            <div className="text-sm">{order.price}</div>
            <div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
