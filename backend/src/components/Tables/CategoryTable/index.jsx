import React, { useState } from 'react'
import ActionPanelButtons from '../../common/ActionPanelBtn';
import ErrorMessage from '../../common/Alerts/ErrorMessage';



const users = [
    {
      id: 1,
      title: "Means Wear",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 2,
      title: "Ellectronices",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 3,
      title: "Foot Ware",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 4,
      title: "Wamen Dress",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 5,
      title: "Watch",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 6,
      title: "Means Fasition",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 7,
      title: "Phone",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 8,
      title: "Computer",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 9,
      title: "Laptop",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
      id: 10,
      title: "Cars",
      createdat: "10/02/2025",
      createdby: "Admin",
    },
    {
        id: 11,
        title: "Buykes",
        createdat: "10/02/2025",
        createdby: "Admin",
    },
    {
        id: 12,
        title: "Stationary",
        createdat: "10/02/2025",
        createdby: "Admin",
    }
  ];
  

const CategoryTable = () => {


  return (
  <div className="w-full px-0">   
    <div className="rounded-lg shadow-lg bg-gray-800 flex flex-col">
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-[14px] text-gray-300 title bg-gray-700 w-full">
                <tr className="flex justify-between items-center gap-4 px-5">
                    <th scope="col" className="px-4 py-4 text-center w-[10%]">SL</th>
                    <th scope="col" className="text-left py-4 w-[30%]">Category Name</th>
                    <th scope="col" className="text-left py-4 w-[20%]">Created By</th>
                    <th scope="col" className="text-left py-4 w-[15%]">Created At</th>
                    <th scope="col" className="text-center py-4 w-[20%] px-10">Actions</th>
                </tr>
            </thead>
        </table>
        </div>
        {/* Scrollable table body wrapper */}
        <div className="overflow-y-auto max-h-[450px]">
          <table className="min-w-full text-sm text-left text-gray-500">
              <tbody>
              {users.map((user, index) => (
                  <tr
                  key={user.id}
                  className="border-b hover:bg-gray-700 hover:text-gray-300 transition duration-200 w-[100%] flex px-5 gap-4 justify-between"
                  >
                  <td className="px-4 py-2 w-[10%] text-center border-gray-700">{index + 1}</td>
                  <td className="py-2 border-gray-600 w-[30%] whitespace-nowrap">{user.title}</td>
                  <td className="py-2 border-gray-600 w-[20%] whitespace-nowrap">{user.createdby}</td>
                  <td className="py-2 border-gray-600 w-[15%] whitespace-nowrap">{user.createdat}</td>
                  <td className="py-2 w-[20%]">
                      <ActionPanelButtons/>
                  </td>
                  </tr>
              ))}
              </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center py-2 px-4 text-sm text-gray-200 bg-gray-600">
        <h4>
            Total Categories: <span>10</span>               
        </h4>
        <div>
            1–5 of 5
            <button className="ml-4 text-gray-500 hover:text-gray-700">&lt;</button>
            <button className="ml-2 text-gray-500 hover:text-gray-700">&gt;</button>
        </div>
        </div>
    </div>
  </div>
  )
}

export default CategoryTable