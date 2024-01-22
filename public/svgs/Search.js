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
        d="M23.707 22.293l-5.969-5.969a10.016 10.016 0 10-1.414 1.414l5.969 5.969a1 1 0 001.414-1.414zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
