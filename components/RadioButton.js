import React from "react";
import PropTypes from 'prop-types';

const RadioButton = (props) => {
    return (
        <div>
            <div className="radio-button">
              <input
                className="form-check-input" 
                type="radio"
                name={props.name}
                value={props.value}
                onChange={(propertyName, value) => props.updateProperty(propertyName, value)}
              />
              <label
                className="form-check-label"
              >
                {props.value}
              </label>
            </div>
        </div>
    );
}

RadioButton.propTypes = {
    updateProperty: PropTypes.func,
    name:PropTypes.string,
    required:PropTypes.bool,
};

export default RadioButton;