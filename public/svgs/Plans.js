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
        xmlns="http://www.w3.org/2000/svg"
        d="M18.656.93L6.464 13.122A4.966 4.966 0 005 16.657V18a1 1 0 001 1h1.343a4.966 4.966 0 003.535-1.464L23.07 5.344a3.125 3.125 0 000-4.414 3.194 3.194 0 00-4.414 0zm3 3L9.464 16.122A3.02 3.02 0 017.343 17H7v-.343a3.02 3.02 0 01.878-2.121L20.07 2.344a1.148 1.148 0 011.586 0 1.123 1.123 0 010 1.586z"
        data-original="#000000"
      ></path>
      <path
        fill={props?.color || '#000000'}
        xmlns="http://www.w3.org/2000/svg"
        d="M23 8.979a1 1 0 00-1 1V15h-4a3 3 0 00-3 3v4H5a3 3 0 01-3-3V5a3 3 0 013-3h9.042a1 1 0 000-2H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h11.343a4.968 4.968 0 003.536-1.464l2.656-2.658A4.968 4.968 0 0024 16.343V9.979a1 1 0 00-1-1zm-4.535 12.143a2.975 2.975 0 01-1.465.8V18a1 1 0 011-1h3.925a3.016 3.016 0 01-.8 1.464z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
