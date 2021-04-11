import React from "react";

function Banner({ children, title, subTitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{children}</p>
    </div>
  );
}
export default Banner;
