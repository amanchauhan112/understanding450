import React from "react";
import "./Banner.css"


function Banner({ children, title, subTitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h1>{subTitle}</h1>

     {children}
    </div>
  );
}
export default Banner;
