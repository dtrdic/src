import React, { PureComponent } from "react";
import '../components/SurveyForm.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SurveyForm extends PureComponent {


    render() {
        const { data, handleChange, required, error, handleSubmit } = this.props;
        debugger;
        const {attributes} = data;

        const questionList = (
            <div>
                {attributes?.questions?.map((question) =>
                (
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
                    )
                )}
            </div>
        );

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
    }
};


function mapStateToProps(state) {
    return {
        data: state.surveyFormData
    };
}

SurveyForm.propTypes = {
    data: PropTypes.shape({
        type: PropTypes.string,
        id: PropTypes.string,
        attributes: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            questions: PropTypes.arrayOf(
                PropTypes.shape({
                    questionId: PropTypes.string,
                    questionType: PropTypes.string,
                    label: PropTypes.string,
                    required: PropTypes.bool,
                    attributes: PropTypes.shape({
                        min: PropTypes.number,
                        max: PropTypes.number,
                    })
                })
            )
        })
    }),
    required: PropTypes.bool,
    error: PropTypes.object,
    handleChange: PropTypes.func,
    postReview: PropTypes.object
};

// SurveyForm.defaultProps = {
//     data: {
//         attributes: {
//             questions: {
//                 questionId: '',
//                 questionType: '',
//                 label: '',
//                 required: false,
//                 attributes: {
//                     min:0,
//                     max:0
//                 }
//             }
//         }
//     }
// }

export default connect(mapStateToProps)(SurveyForm);