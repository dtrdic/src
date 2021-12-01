import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class Input extends PureComponent {
    render() {
        const { type, name, id, required, label, placeholder } = this.props;
        return (
            <div>
                <div className="Form__question-container">
                <label
                    id={id}
                    className="Form__question"
                >
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    id={id}
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
    id:PropTypes.string,
    placeholder:PropTypes.string,
    required:PropTypes.bool,
    label: PropTypes.string,
    htmlFor: PropTypes.string
};

export default Input;