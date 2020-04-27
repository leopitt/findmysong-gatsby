import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Brand = ({ siteTitle }) => (
  <h1 class="c-brand c-header__brand">
    <Link
      to="/"
    >
      Find<span class="c-brand__space"> </span><span class="c-brand--lighter">My</span><span class="c-brand__space"> </span>Song
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
