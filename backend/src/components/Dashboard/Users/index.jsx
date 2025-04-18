import React from "react";
import { FaRegEye } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FiTrash2 } from "react-icons/fi";




const users = [
  {
    id: 1,
    name: "Leah Stevens",
    email: "user1@example.com",
    date: "7/1/2024",
    country: "Market",
    status: "Inactive",
  },
  {
    id: 2,
    name: "Tillie Martin",
    email: "user2@example.com",
    date: "7/22/2024",
    country: "Development",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Cora Miles",
    email: "user3@example.com",
    date: "2/7/2025",
    country: "Finance",
    status: "Active",
  },
  {
    id: 4,
    name: "Calvin Harrison",
    email: "user4@example.com",
    date: "11/17/2024",
    country: "Development",
    status: "Pending",
  },
  {
    id: 5,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 6,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 7,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 8,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 9,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 10,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
  {
    id: 11,
    name: "Darrell Aguilar",
    email: "user5@example.com",
    date: "3/16/2025",
    country: "Finance",
    status: "Pending",
  },
];

const AllUsers = () => {
  return (
    <div className="px-6">
        {/** Top Header */}
        <div className="border-b-[0.1px] border-gray-700 py-2">
            <h2 className="text-xl">All Users Information</h2>
        </div>
        <div className="flex justify-end my-4 text-[15px]">
            <button className="rounded-[2px] border-[0.5px] px-4 py-[5px] border-gray-500 text-gray-400 
            hover:bg-gray-800 hover:text-gray-50 hover:border-pink-700 transition-shadow duration-300 ease-in-out cursor-pointer">
                Add New User
            </button>
        </div>


        <div className="w-full">
        <div className="rounded-lg shadow-lg bg-gray-800 flex flex-col">
            <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-300 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-4">SL</th>
                        <th scope="col" className="px-6 py-4">User Name</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Country</th>
                        <th scope="col" className="px-6 py-4">Status</th>
                        <th scope="col" className="px-6 py-4">Date</th>
                        <th scope="col" className="px-6 py-4">Actions</th>
                    </tr>
                </thead>
            </table>
            </div>

            {/* Scrollable table body wrapper */}
            <div className="overflow-y-auto max-h-[400px]">
            <table className="min-w-full text-sm text-left text-gray-500">
                <tbody>
                {users.map((user, index) => (
                    <tr
                    key={user.id}
                    className="border-b hover:bg-gray-700 hover:text-gray-300 transition duration-200"
                    >
                    <td className="px-6 py-3">{index + 1}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{user.country}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{user.status}</td>
                    <td className="px-6 py-3 whitespace-nowrap">{user.date}</td>
                    <td className="px-6 py-3 flex space-x-4 text-gray-600">
                        <button className="text-gray-400 hover:text-green-600">
                        <FaRegEye size={18} />
                        </button>
                        <button className="text-blue-300 hover:text-blue-500">
                        <HiOutlinePencilSquare size={18} />
                        </button>
                        <button className="text-red-300 hover:text-red-600">
                        <FiTrash2 size={18} />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center py-2 px-4 text-sm text-gray-200 bg-gray-600">
            <div>
                Rows per page:
                <select className="ml-2 border rounded p-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                </select>
            </div>
            <div>
                1–5 of 5
                <button className="ml-4 text-gray-500 hover:text-gray-700">&lt;</button>
                <button className="ml-2 text-gray-500 hover:text-gray-700">&gt;</button>
            </div>
            </div>
        </div>
        </div>
    </div>

  );
};

export default AllUsers;
