import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const BigTextButton = ({ label }) => (
  <Link
    to="/1"
    class="c-big-text-button"
  >
    {label}
  </Link>
)

BigTextButton.propTypes = {
  label: PropTypes.string,
}

BigTextButton.defaultProps = {
  label: ``,
}

export default BigTextButton
