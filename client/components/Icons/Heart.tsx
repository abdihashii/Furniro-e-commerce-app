import React from 'react';

const Heart = ({
  className,
  stroke,
  width,
  height,
}: {
  className?: string;
  stroke?: {
    color?: string;
    width?: number;
  };
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '16'}
      height={height || '16'}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M7.99973 14.0361C-5.33333 6.66669 3.99999 -1.33331 7.99973 3.72539C12 -1.33331 21.3333 6.66669 7.99973 14.0361Z"
        stroke={stroke?.color || 'white'}
        strokeWidth={stroke?.width || '1.8'}
      />
    </svg>
  );
};

export default Heart;
