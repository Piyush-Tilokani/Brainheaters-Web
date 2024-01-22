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
        d="M9.288 13.067c-2.317.446-3.465 3.026-3.963 4.634A1 1 0 006.281 19H10a3 3 0 002.988-3.274 3.107 3.107 0 00-3.7-2.659z"
        data-original="#000000"
      ></path>
      <path
        fill={props?.color || '#000000'}
        xmlns="http://www.w3.org/2000/svg"
        d="M23 8.979a1 1 0 00-1 1V15h-4a3 3 0 00-3 3v4H5a3 3 0 01-3-3V5a3 3 0 013-3h11.042a1 1 0 000-2H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h11.343a4.966 4.966 0 003.535-1.464l2.658-2.658A4.966 4.966 0 0024 16.343V9.979a1 1 0 00-1-1zm-4.536 12.143a3.022 3.022 0 01-1.464.8V18a1 1 0 011-1h3.925a3.022 3.022 0 01-.8 1.464z"
        data-original="#000000"
      ></path>
      <path
        fill={props?.color || '#000000'}
        xmlns="http://www.w3.org/2000/svg"
        d="M14.566 14.17a1 1 0 01-.707-1.707l7.853-7.853a.943.943 0 000-1.335.9.9 0 00-.694-.275.933.933 0 00-.678.314l-7.6 8.407a1 1 0 01-1.484-1.341l7.6-8.4A2.949 2.949 0 0120.963 1a2.985 2.985 0 012.163.862 2.947 2.947 0 010 4.163l-7.853 7.853a.993.993 0 01-.707.292z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
