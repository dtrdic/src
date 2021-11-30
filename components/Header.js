import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <div className="HeaderBanner">
      <h1 className="HeaderBanner__title">{props.attributes?.title}</h1>
      <div
        className="HeaderBanner__description"
        dangerouslySetInnerHTML={{ __html: props.attributes?.description }}
      ></div>
    </div>
  );
};


export default Header;