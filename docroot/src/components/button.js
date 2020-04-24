import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Button = ({ label }) => (
  <Link
    to="/"
  >
    {label}
  </Link>
)

Button.propTypes = {
  label: PropTypes.string,
}

Button.defaultProps = {
  label: ``,
}

export default Button
