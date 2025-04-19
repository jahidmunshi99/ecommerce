import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FiTrash2 } from "react-icons/fi";

const ActionPanelButtons = ({onClick1, onClick2, onClick3}) => {
  return (
    <div className='flex space-x-6 text-gray-600 justify-center'>
        <button onClick={onClick1} className="text-gray-400 hover:text-green-600 cursor-pointer">
        <FaRegEye size={18} />
        </button>
        <button onClick={onClick2}className="text-blue-300 hover:text-blue-500 cursor-pointer">
        <HiOutlinePencilSquare size={18} />
        </button>
        <button onClick={onClick3} className="text-red-300 hover:text-red-600 cursor-pointer">
        <FiTrash2 size={18} />
        </button>
    </div>
  )
}

export default ActionPanelButtons