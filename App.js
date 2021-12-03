import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import SurveyForm from './components/SurveyForm';
import { updateProperty } from './actions/creators';
import { submitFormAnswers } from './actions/networkCalls';
import SuccessPage from './components/SuccessPage';

class App extends PureComponent {


  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <Loader 
            visible={this.props.spinner} />
            {!data.isSubmitted ?  
        <div>
          <Header
              attributes={data.attributes} />
          <SurveyForm
              data={data}
              onFormSubmit={this.props.onFormSubmit}
              updateProperty={this.props.updateProperty}
              errors={this.props.errors}
          />
        </div> :
          <SuccessPage 
          answers={data.answers}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      spinner: state.spinnerVisible,
      data: state.surveyFormData,
      errors: state.validationErrors
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateProperty: (propertyName, value) => {
      dispatch(updateProperty(propertyName, value));
  },

  onFormSubmit: () => {
      dispatch(submitFormAnswers());
  },

});

App.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  spinner: PropTypes.bool.isRequired,
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
  onFormSubmit: PropTypes.func,
  updateProperty: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
