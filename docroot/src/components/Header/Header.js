import PropTypes from "prop-types"
import React from "react"

import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu"

const Header = ({ siteTitle }) => (
  <header className="c-header">
    <Brand siteTitle={siteTitle} />
    <Menu />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
