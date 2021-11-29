import React from "react";
import { connect } from 'react-redux';
import "./Header.scss";

const Header = (props) => {
  const { attributes } = props.surveyFormData;
  return (
    <div className="HeaderBanner">
      <h1 className="HeaderBanner__title">{attributes?.title}</h1>
      <div
        className="HeaderBanner__description"
        dangerouslySetInnerHTML={{ __html: attributes?.description }}
      ></div>
    </div>
  );
};

function mapStateToProps(state) {
    return {
        surveyFormData: state.surveyFormData
    };
}

export default connect(mapStateToProps)(Header);