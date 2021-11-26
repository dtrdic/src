import React from "react";
import '../components/SurveyForm.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SurveyForm = (props) => {
    const { data, handleChange, required, error, handleSubmit } = props;
    debugger;

  return (
    <div className="Form">
    <form id="survey-form" onSubmit={handleSubmit}>
      <div className="form-column">
        {data?.attributes?.questions &&
          data?.attributes?.questions.map((question, index) => (
            <div key={index}>
              {question?.attributes === null ? (
                <div className="Form__question-container">
                  <label
                    htmlFor={question?.questionId}
                    id="movie-name-label"
                    className="Form__question"
                  >
                    {question?.label}
                  </label>
                  <input
                    type={question?.questionType}
                    name="film"
                    id={question?.questionId}
                    placeholder="Enter the name of the film"
                    required={question?.required}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <>
                  <div className="radio-buttons">
                    <h3 className="Form__question">{question?.label}</h3>

                    <div className="radio-button">
                      <input
                        type="radio"
                        name="review"
                        value="movie-review-bad"
                        id="movie-review-bad"
                        onChange={handleChange}
                        required={question?.required}
                      />
                      <label
                        htmlFor="movie-review-bad"
                        className="radio-button-label"
                      >
                        <span className="radio-button-span"></span>
                        {question?.attributes?.min}
                      </label>
                    </div>

                    <div className="radio-button">
                      <input
                        type="radio"
                        name="review"
                        value="movie-review-good"
                        id="movie-review-good"
                        required={question?.required}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="movie-review-good"
                        className="radio-button-label"
                      >
                        <span className="radio-button-span"></span>
                        {question?.attributes?.max}
                      </label>
                    </div>
                  </div>
                  {required && <div> {required}</div>}
                </>
              )}
            </div>
          ))}
        <div className="Form__button">
          <input
            className="Form__button-submit"
            type="submit"
            value="Submit"
            id="submit"
          />
          {error && <div> {error}</div>}
        </div>
      </div>
    </form>
  </div>
  );
};

SurveyForm.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string,
        id: PropTypes.string,
        atributes: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            questions: PropTypes.arrayOf(
                PropTypes.shape({
                    questionId: PropTypes.string,
                    questionType: PropTypes.string,
                    label: PropTypes.string,
                    required: PropTypes.bool,
                    atributes: PropTypes.shape({
                        min: PropTypes.number,
                        max: PropTypes.number,
                    })
                })).isRequired,
        })
    })
};

function mapStateToProps(state) {
    return {
        data: state.surveyFormData,
    };
}

export default connect(mapStateToProps)(SurveyForm);