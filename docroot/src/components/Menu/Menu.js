import { Link } from "gatsby"
import React from "react"

const Menu = ({ siteTitle }) => (
  <nav class="c-menu c-header__menu">
    <Link class="c-menu__link" to="/about/">
      About
    </Link>
  </nav>
)

export default Menu
