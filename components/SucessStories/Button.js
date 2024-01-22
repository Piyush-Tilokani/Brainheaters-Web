import React from "react";

function Button(props) {
  const wrapper = {
    backgroundColor: "#F3F3FF",
    borderRadius: "0.8rem",

    // Set width
    height: "65px",
    // Set top margin

    // Center the content vertically

    ...props.chipStyle,
  };
  const text = {
    fontFamily: "Gordita-Medium",

    ...props.textStyle,
  };

  return (
    <div style={wrapper}>
      <div style={text}>{props.children}</div>
    </div>
  );
}

export default Button;
