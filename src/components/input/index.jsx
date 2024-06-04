import React from "react";

export default function Input({ type, placeholder, marginTop = "0px" }) {
  const style = {
    width: "100%",
    display: "block",
    border: "1px solid #333333",
    outline: "none",
    borderRadius: "5px",
    padding: "1rem 1.5rem",
    fontSize: "1rem",
    marginTop: marginTop,
  };
  return <input type={type} placeholder={placeholder} style={style} />;
}
