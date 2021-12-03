import React,{ PureComponent } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "./SuccessPage.scss";

class SuccessPage extends PureComponent {
    componentDidMount() {
        window.location.assign('/success');
      }

    render() {

    const { answers } = this.props;

      return (
        <><div className="SuccessPage">
              <div className="SuccessPage__container">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuH7r4AYvAq_9Dk9VX4ptLrbVGAlzdZx4tg&usqp=CAU"
                      alt="thankyou" />
                  <h1 className="SuccessPage__title">Success!</h1>
                  <p>Thank you for your film review.</p>
                  <div>
                      {answers.map((answer, index) => (
                          <div key={index}>
                          <>
                          <div className="SuccessPage__answers">
                              <span>{answer.questionId}: </span>
                              <span>{answer.answer}</span>
                          </div></>
                          </div>))}
                          <p>If you like to review more films, please do so here</p>
                {/* <Link to="/">
                    <div className="SuccessPage__button">Review Film</div>
                </Link> */}
                  </div>
              </div>
          </div></>
      );

  }
}

SuccessPage.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.object),
  };

export default SuccessPage;