import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      id="card-wrapper"
      className={`grid grid-cols-2 gap-4 rounded-lg border border-gray-500 p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
