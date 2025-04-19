import React, { useState } from 'react'
import ActionPanelButtons from '../../common/ActionPanelBtn';
import ErrorMessage from '../../common/Alerts/ErrorMessage';



const users = [
    {
      id: 1,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 2,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 3,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 4,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 5,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 6,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 7,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 8,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
      id: 9,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Running",
      createdby: "Admin",
    },
    {
      id: 10,
      title: "Summer Offer",
      discountoff : '5%',
      startat: "10/02/2020",
      endof: "10/02/2025",
      status: "Closed",
      createdby: "Admin",
    },
    {
        id: 11,
        title: "Summer Offer",
        discountoff : '5%',
        startat: "10/02/2020",
        endof: "10/02/2025",
        status: "Closed",
        createdby: "Admin",
    },
    {
        id: 12,
        title: "Summer Offer",
        discountoff : '5%',
        startat: "10/02/2020",
        endof: "10/02/2025",
        status: "Closed",
        createdby: "Admin",
    }
  ];
  

const CampainsTable = () => {


  return (
  <div className="w-full px-[1px]">   
    <div className="rounded-lg shadow-lg bg-gray-800 flex flex-col">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-[14px] text-gray-300 title bg-gray-700 w-full">
                  <tr className="flex justify-between items-center gap-4">
                      <th scope="col" className="px-4 py-4 text-center border-r-[0.5px] border-gray-600 w-[7%]">SL</th>
                      <th scope="col" className="text-left py-4 border-r-[0.5px] border-gray-600 w-[23%]">Title</th>
                      <th scope="col" className="text-center py-4 border-r-[0.5px] border-gray-600 w-[10%]">Discounts</th>
                      <th scope="col" className="text-center py-4 border-r-[0.5px] border-gray-600 w-[15%]">Start</th>
                      <th scope="col" className="text-center py-4 border-r-[0.5px] border-gray-600 w-[15%]">End</th>
                      <th scope="col" className="text-center py-4 border-r-[0.5px] border-gray-600 w-[10%]">Status</th>
                      <th scope="col" className="text-center py-4 border-r-[0.5px] border-gray-600 w-[10%]">Created By</th>
                      <th scope="col" className="text-center py-4 w-[10%] px-10">Actions</th>
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
                  className="border-b hover:bg-gray-700 hover:text-gray-300 transition duration-200 w-[100%] flex gap-4 justify-between"
                  >
                  <td className="px-4 py-2 w-[7%] text-center border-r-[0.5px] border-gray-700">{index + 1}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[23%] whitespace-nowrap">{user.title}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[10%] text-center whitespace-nowrap">{user.discountoff}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[15%] text-center whitespace-nowrap">{user.startat}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[15%] text-center whitespace-nowrap">{user.endof}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[10%] text-center whitespace-nowrap">{user.status}</td>
                  <td className="py-2 border-r-[0.5px] border-gray-600 w-[10%] text-center whitespace-nowrap">{user.createdby}</td>
                  <td className="py-2 w-[10%] px-10">
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
            Total Users: <span>10</span>               
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

export default CampainsTable