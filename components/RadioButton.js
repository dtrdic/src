import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class RadioButton extends PureComponent {

    render () {
        const { name, value, id } = this.props;
        return (
            <div>
                <div className="radio-button">
                  <input
                    className="form-check-input" 
                    type="radio"
                    name={name}
                    value={value}
                    id={id}
                    onChange={(propertyName, value) => this.props.updateProperty(propertyName, value)}
                  />
                  <label
                    className="form-check-label"
                  >
                    {value}
                  </label>
                </div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    updateProperty: PropTypes.func,
    name:PropTypes.string,
    id:PropTypes.string,
    required:PropTypes.bool,
    label: PropTypes.string,
};

export default RadioButton;