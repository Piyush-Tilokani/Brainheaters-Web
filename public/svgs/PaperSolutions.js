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
        d="M19.535 3.122l-1.656-1.658A4.968 4.968 0 0014.343 0H8a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V6.657a4.968 4.968 0 00-1.465-3.535zm-1.414 1.414A2.932 2.932 0 0118.5 5H16V2.5a3.1 3.1 0 01.465.38zM19 19a3 3 0 01-3 3H8a3 3 0 01-3-3V5a3 3 0 013-3h6v3a2 2 0 002 2h3zM16 9a1 1 0 010 2H8a1 1 0 010-2zm1 5a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-.192 3.413a1 1 0 01-.217 1.394A6.464 6.464 0 0113.135 20a3.252 3.252 0 01-2-.7c-.328-.225-.453-.3-.7-.3a3.951 3.951 0 00-1.832.794 1 1 0 01-1.214-1.588A5.861 5.861 0 0110.439 17a3.025 3.025 0 011.832.655 1.347 1.347 0 00.864.345 4.586 4.586 0 002.277-.809 1 1 0 011.396.222z"
        data-original="#000000"
      ></path>
    </svg>
    </div>
  );
}

export default Icon;
