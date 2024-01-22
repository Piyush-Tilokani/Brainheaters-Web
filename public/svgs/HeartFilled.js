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
        d="M17.5 1.917a6.4 6.4 0 00-5.5 3.3 6.4 6.4 0 00-5.5-3.3A6.8 6.8 0 000 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 006.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 00-6.5-7.05z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
