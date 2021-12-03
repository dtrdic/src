import React from "react";
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div>
            <div className="Form__question-container">
            <label
                className="Form__question"
            >
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                className="Form__input"
                onChange={(propertyName, value) => props.updateProperty(propertyName, value)}
            />
            </div>
        </div>
    );

};

Input.propTypes = {
    updateProperty: PropTypes.func,
    type:PropTypes.string,
    name:PropTypes.string,
    placeholder:PropTypes.string,
    required:PropTypes.bool,
    label: PropTypes.string,
};

export default Input;