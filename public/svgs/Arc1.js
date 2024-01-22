import React from "react";

function Icon(props) {
  return (
    <div className={props.className} style={{...props?.style,width: 'fit-content',padding:'8px',borderRadius:'100px',cursor:'pointer'}} onClick={props?.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props?.size || '55px'}
      height={props?.size || '55px'}
      enableBackground="new 0 0 512 512"
      fill="none"
      viewBox="0 0 33 55"
    >

    <path
      stroke={props?.color || '#000000'}
      strokeOpacity="0.26"
      strokeWidth="2"
      d="M31.254 53.91C34.275 34.465 26.878 22.931 1 1.507"

    ></path>

    </svg>
    </div>
  );
}

export default Icon;
