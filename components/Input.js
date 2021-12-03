import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Input extends PureComponent {
    render() {
        const { type, name, required, label, placeholder } = this.props;
        return (
            <div>
                <div className="Form__question-container">
                <label
                    className="Form__question"
                >
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className="Form__input"
                    onChange={(propertyName, value) => this.props.updateProperty(propertyName, value)}
                />
                </div>
            </div>
        );
    }
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