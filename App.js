import './App.css';
import SurveyForm from './components/SurveyForm'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <SurveyForm 
          //{...this.props.data}
          // required={required}
          // error={error}
          // handleChange={handleChange}
          // handleSubmit={postReview}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
      data: state.surveyFormData,
  };
}

App.propTypes = {
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
      }),
      // required: PropTypes.bool,
      // error: PropTypes.object,
      // handleChange: PropTypes.func,
      // postReview: PropTypes.object
  }),
};

export default connect(mapStateToProps)(App);
