import React,{ PureComponent } from "react";
import PropTypes from 'prop-types';
import "./SuccessPage.scss";

class SuccessPage extends PureComponent {
    _onRetunToHome = () => {
        window.location = 'http://localhost:3000/';
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
                    <p>If you like to review more films, please do so</p>
                    <div onClick={this._onRetunToHome} className="SuccessPage__button">Here</div>
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