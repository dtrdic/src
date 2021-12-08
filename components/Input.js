import React from "react";
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <div>
            <div className="Form__question-container">
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                className="Form__input"
                onChange={e => props.updateProperty(e.target.name, e.target.value)}
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
};

export default Input;