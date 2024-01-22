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
      d="M17 14a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-4 3H8a1 1 0 000 2h5a1 1 0 000-2zm9-6.515V19a5.006 5.006 0 01-5 5H7a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h4.515a6.958 6.958 0 014.95 2.05l3.484 3.486A6.951 6.951 0 0122 10.485zm-6.949-7.021A5.01 5.01 0 0014 2.684V7a1 1 0 001 1h4.316a4.983 4.983 0 00-.781-1.05zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 01-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3z"
      data-original="#000000"
    ></path>

    </svg>
    </div>
  );
}

export default Icon;
