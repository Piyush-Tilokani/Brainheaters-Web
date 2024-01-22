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
        d="M19.949 5.536L16.465 2.05A6.958 6.958 0 0011.515 0H7a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h10a5.006 5.006 0 005-5v-8.515a6.951 6.951 0 00-2.051-4.949zM18.535 6.95A4.983 4.983 0 0119.316 8H15a1 1 0 01-1-1V2.684a5.01 5.01 0 011.051.78zM20 19a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3h4.515c.164 0 .323.032.485.047V7a3 3 0 003 3h4.953c.015.162.047.32.047.485z"
        data-original="#000000"
      ></path>

    </svg>
    </div>
  );
}

export default Icon;
