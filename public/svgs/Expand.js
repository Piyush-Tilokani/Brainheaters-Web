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
      <g fill={props?.color || '#000000'}>
        <path
          d="M19 24h-2a1 1 0 010-2h2a3 3 0 003-3v-2a1 1 0 012 0v2a5.006 5.006 0 01-5 5zM1 8a1 1 0 01-1-1V5a5.006 5.006 0 015-5h2a1 1 0 010 2H5a3 3 0 00-3 3v2a1 1 0 01-1 1zM7 24H5a5.006 5.006 0 01-5-5v-2a1 1 0 012 0v2a3 3 0 003 3h2a1 1 0 010 2zM23 8a1 1 0 01-1-1V5a3 3 0 00-3-3h-2a1 1 0 010-2h2a5.006 5.006 0 015 5v2a1 1 0 01-1 1z"
          data-original="#000000"
        ></path>
      </g>
    </svg>
    </div>
  );
}

export default Icon;
