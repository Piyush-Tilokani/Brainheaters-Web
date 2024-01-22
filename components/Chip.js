import React from 'react'

function Chip(props) {
    const wrapper = {
        backgroundColor:'#E8E6FF',
        borderRadius:100,
        paddingLeft:'10px',
        paddingRight:'10px',
        paddingTop:'5px',
        paddingBottom:'5px',
        alignItems:'center',
        display:'inline-flex',
        ...props.chipStyle
    }
    const text = {
        fontFamily:'Gordita-Medium',
        color:"#FFF",
        fontSize:'8px',
        ...props.textStyle
    }

  return (
    <div style={wrapper}>
        {props?.icon && props.icon} 
        <p style={text}>{props.children}</p>
    </div>
  )
}

export default Chip
