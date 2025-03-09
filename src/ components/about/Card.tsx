import React from "react";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      id="card-wrapper"
      className="border border-gray-500 grid grid-cols-2 gap-4 rounded-lg bg-opacity-85 p-4"
    >
      {children}
    </div>
  );
};

export default Card;
