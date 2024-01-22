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
        d="M17 0H7a5.006 5.006 0 00-5 5v15a4 4 0 004 4h11a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zm3 5v11H8V2h9a3 3 0 013 3zM6 2.172V16a3.98 3.98 0 00-2 .537V5a3 3 0 012-2.828zM17 22H6a2 2 0 010-4h14v1a3 3 0 01-3 3z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
