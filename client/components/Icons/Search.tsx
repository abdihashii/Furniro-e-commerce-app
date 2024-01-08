import React from 'react';

const Search = ({
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
      width={width || '28'}
      height={height || '28'}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        d="M24.5 24.5L19.2663 19.257M22.1666 12.25C22.1666 14.88 21.1219 17.4024 19.2621 19.2621C17.4024 21.1219 14.88 22.1666 12.25 22.1666C9.61992 22.1666 7.09757 21.1219 5.23784 19.2621C3.3781 17.4024 2.33331 14.88 2.33331 12.25C2.33331 9.61992 3.3781 7.09757 5.23784 5.23784C7.09757 3.3781 9.61992 2.33331 12.25 2.33331C14.88 2.33331 17.4024 3.3781 19.2621 5.23784C21.1219 7.09757 22.1666 9.61992 22.1666 12.25V12.25Z"
        stroke={stroke?.color || 'black'}
        stroke-width={stroke?.width || '2'}
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Search;