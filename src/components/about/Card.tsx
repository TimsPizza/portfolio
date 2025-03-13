import React from "react";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      id="card-wrapper"
      className={`grid grid-cols-2 gap-4 rounded-lg p-4 ${className}`}
      style={{ 
        backgroundColor: 'var(--theme-background-dark)',
        borderColor: 'var(--theme-text-gray)',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
    >
      {children}
    </div>
  );
};

export default Card;
