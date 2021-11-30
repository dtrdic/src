import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "./SuccessPage.scss";



function SuccessPage() {
    debugger;

  const userReview = localStorage.getItem("userReview");
  const review = JSON.parse(userReview);


  return (
    <div className="SuccessPage">
      <div className="SuccessPage__container">
        <img
          src="https://i.ibb.co/Jmr8z84/heart.png"
          alt="heart"
          className="SuccessPage__heart"
        />
        <h1 className="SuccessPage__title">Success!</h1>
        <p>Thank you for your film review.</p>
        <div className="SuccessPage__answers">
          <span>Film: </span>
          <span>{review?.answers[0]?.answer}</span>
        </div>
        <div className="SuccessPage__answers">
          <span>Review: </span>
          <span>
            {review?.answers[1]?.answer === "movie-review-good" ? 5 : 1}
          </span>
        </div>
        <p>If you like to review more films, please do so here</p>
        <Link to="/">
          <div className="SuccessPage__button">Review Film</div>
        </Link>
      </div>
      <div className="SuccessPage__text"></div>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        data: state.surveyFormData
    };
  }

export default connect(mapStateToProps)(SuccessPage);