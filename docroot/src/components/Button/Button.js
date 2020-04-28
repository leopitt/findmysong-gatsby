import PropTypes from "prop-types"
import React from "react"

const Button = ({ label, className, disabled }) => (
  <button
    className={className}
    type="submit"
    disabled={disabled}
  >
    {label}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
}

Button.defaultProps = {
  className: `c-button`,
  disabled: false,
  label: ``,
}

export default Button
