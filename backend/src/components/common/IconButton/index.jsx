import React from "react";

const IconButton = ({ icon: Icon, children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border border-gray-600 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-700 ${className}`}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default IconButton;
