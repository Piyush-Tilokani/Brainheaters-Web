import React from "react";

function Icon(props) {
  return (
    <div style={{...props?.style,width: 'fit-content',padding:'8px',borderRadius:'100px',cursor:'pointer'}} onClick={props?.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || '24px'}
      height={props?.size || '24px'}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 24 24"
    >
      <path
        fill={props?.color || '#000000'}
        d="M18.746 20.334a1 1 0 01-.081 1.413l-1.586 1.414a2.9 2.9 0 01-2.064.839 3.013 3.013 0 01-2.136-.882l-1.544-1.374a1 1 0 011.33-1.494L14 21.444V14a1 1 0 012 0v7.445l1.335-1.192a1 1 0 011.411.081zm-.39-12.973a1.088 1.088 0 01-.722-.735 8 8 0 00-15.489.842 7.657 7.657 0 00.8 5.18A5.448 5.448 0 00.057 18.3 5.843 5.843 0 005.683 23H8a1 1 0 000-2H5.683a3.81 3.81 0 01-3.646-2.982 3.469 3.469 0 011.834-3.6 1.993 1.993 0 00.793-2.685 6 6 0 1111.06-4.513 3.1 3.1 0 002.045 2.052 5.971 5.971 0 014.212 6.21 5.377 5.377 0 01-1.111 2.909 1 1 0 001.586 1.219 7.466 7.466 0 001.52-3.972 7.96 7.96 0 00-5.62-8.277z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
