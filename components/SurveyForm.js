import React, { PureComponent } from "react";
import '../components/SurveyForm.scss';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Input from './Input';
import RadioButton from './RadioButton';

class SurveyForm extends PureComponent {
    _getMandatoryFields = () => {
        return {
            film: (_.some(this.props.errors, { propertyName: 'film' })),
            review: (_.some(this.props.errors, { propertyName: 'review' })),
        };
    }

      _submitAnswers = (event) => {
        event.preventDefault();
        this.props.onFormSubmit();
    }

    _updateProperty = (property) => {

        this.props.updateProperty(property.target.name, property.target.value);
    }

    render() {
        const { data } = this.props;
        const mandatoryFields = this._getMandatoryFields();
        const filmErrorMessage = mandatoryFields.film ? 'This field is required' : '';
        const reviewErrorMEssage = mandatoryFields.review ? 'This field is required' : '';

        return (
        <div className="Form">
            <form >
                {data?.attributes?.questions.map((question, index) => (
                    <div key={index}>
                    {question?.attributes === null ? (
                        <div className="form-group">
                            <h3>{question?.label}</h3>
                            <Input
                                placeholder="Enter the name of the film"
                                type="text"
                                name={question?.questionId}
                                required={question?.required}
                                updateProperty={this._updateProperty}
                            />
                            {mandatoryFields.film?  <div className="Form__errorMessage">{filmErrorMessage}</div> : <div></div>}
                        </div>
                    ) : (
                        <>
                        <h3>{question?.label}</h3>
                        <div className="form-check form-check-inline">
                            <RadioButton
                                type="radio"
                                name="review"
                                value={question?.attributes?.min}
                                required={question?.required}
                                updateProperty={(propertyName, value) => this._updateProperty(propertyName, value)}
                                />
                            <div/>
                            <div className="form-check form-check-inline">
                            <RadioButton
                                type="radio"
                                name="review"
                                value={question?.attributes?.max}
                                required={question?.required}
                                updateProperty={(propertyName, value) => this._updateProperty(propertyName, value)}
                                />
                            </div>
                        </div>
                        {mandatoryFields.review?  <div className="Form__errorMessage">{reviewErrorMEssage}</div> : <div></div>}
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
                    onClick={this._submitAnswers}
                />
                </div>
            </form>
          </div>
        );
    }
};


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
        }),
        isSubmitted: PropTypes.bool,
    }),
    required: PropTypes.bool,
    onFormSubmit: PropTypes.func,
    updateProperty: PropTypes.func,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            propertyName: PropTypes.string,
            errorMessage: PropTypes.string,
        })).isRequired,
};

SurveyForm.defaultProps = {
    data: {
        attributes: {
            questions: {
                questionId: '',
                questionType: '',
                label: '',
                required: false,
                attributes: {
                    min:0,
                    max:0
                }
            }
        }
    }
}

export default SurveyForm;