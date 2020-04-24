import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Brand from "./brand"

const Header = ({ siteTitle }) => (
  <header>
    <Brand siteTitle={siteTitle} />
    <Link to="/about/">
      About
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
