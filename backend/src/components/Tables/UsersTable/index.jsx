import React, { useState } from 'react'
import ActionPanelButtons from '../../common/ActionPanelBtn';
import ErrorMessage from '../../common/Alerts/ErrorMessage';



const users = [
    {
      id: 1,
      name: "Leah Stevens",
      email: "user1@example.com",
      date: "7/1/2024",
      country: "Market",
      status: "Author",
    },
    {
      id: 2,
      name: "Tillie Martin",
      email: "user2@example.com",
      date: "7/22/2024",
      country: "Development",
      status: "Editor",
    },
    {
      id: 3,
      name: "Cora Miles",
      email: "user3@example.com",
      date: "2/7/2025",
      country: "Finance",
      status: "Admin",
    },
    {
      id: 4,
      name: "Calvin Harrison",
      email: "user4@example.com",
      date: "11/17/2024",
      country: "Development",
      status: "Mdaretor",
    },
    {
      id: 5,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    },
    {
      id: 6,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    },
    {
      id: 7,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    },
    {
      id: 8,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    },
    {
      id: 9,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    },
    {
      id: 10,
      name: "Darrell Aguilar",
      email: "user5@example.com",
      date: "3/16/2025",
      country: "Finance",
      status: "User",
    }
  ];
  

const UsersTable = () => {


  return (
  <div className="w-full px-0">   
    <div className="rounded-lg shadow-lg bg-gray-800 flex flex-col">
        <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700 w-full">
                <tr className="w-[100%] flex justify-between items-center">
                    <th scope="col" className="px-4 py-4 w-[5%]">SL</th>
                    <th scope="col" className="text-left w-[20%]">User Name</th>
                    <th scope="col" className="text-left w-[20%]">Email</th>
                    <th scope="col" className="text-left w-[15%]">Country</th>
                    <th scope="col" className="text-left w-[10%]">Status</th>
                    <th scope="col" className="text-left w-[10%]">Date</th>
                    <th scope="col" className="text-center w-[20%]">Actions</th>
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
                  className="border-b hover:bg-gray-700 hover:text-gray-300 transition duration-200 w-[100%] flex justify-between"
                  >
                  <td className="px-4 py-3 w-[5%]">{index + 1}</td>
                  <td className="py-3 w-[20%] whitespace-nowrap">{user.name}</td>
                  <td className="py-3 w-[20%] whitespace-nowrap">{user.email}</td>
                  <td className="py-3 w-[15%] whitespace-nowrap">{user.country}</td>
                  <td className="py-3 w-[10%] whitespace-nowrap">{user.status}</td>
                  <td className="py-3 w-[10%] whitespace-nowrap">{user.date}</td>
                  <td className="py-3 w-[20%]">
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

export default UsersTable