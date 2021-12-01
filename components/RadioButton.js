import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

class RadioButton extends PureComponent {
    _updateProperty = (propert) => {

    }

    render () {
        const { score, name, value, id } = this.props;
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
                    {score}
                  </label>
                </div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    updateProperty: PropTypes.func,
    type:PropTypes.string,
    name:PropTypes.string,
    id:PropTypes.string,
    placeholder:PropTypes.string,
    required:PropTypes.bool,
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    score: PropTypes.number
};

export default RadioButton;