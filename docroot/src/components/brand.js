import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Brand = ({ siteTitle }) => (
  <h1>
    <Link
      to="/"
    >
      {siteTitle}
    </Link>
  </h1>
)

Brand.propTypes = {
  siteTitle: PropTypes.string,
}

Brand.defaultProps = {
  siteTitle: ``,
}

export default Brand
