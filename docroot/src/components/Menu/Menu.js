import { Link } from "gatsby"
import React from "react"

const Menu = ({ siteTitle }) => (
  <nav className="c-menu c-header__menu">
    <Link className="c-menu__link" to="/about/">
      About
    </Link>
  </nav>
)

export default Menu
