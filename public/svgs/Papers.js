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
        d="M16 6a1 1 0 010 2H8a1 1 0 010-2zm7.707 17.707a1 1 0 01-1.414 0L19.886 21.3a4.457 4.457 0 01-2.386.7 4.5 4.5 0 114.5-4.5 4.457 4.457 0 01-.7 2.386l2.407 2.407a1 1 0 010 1.414zM17.5 20a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5zM13 22H7a3 3 0 01-3-3V5a3 3 0 013-3h12a1 1 0 011 1v8a1 1 0 002 0V3a3 3 0 00-3-3H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h6a1 1 0 000-2z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
