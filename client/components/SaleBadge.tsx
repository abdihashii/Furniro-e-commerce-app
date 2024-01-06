import React from 'react';

const SaleBadge = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center w-12 h-12 rounded-full ${
        content === 'New' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'
      } ${className ?? ''}`}
    >
      <span className="text-white font-medium">{content}</span>
    </div>
  );
};

export default SaleBadge;
