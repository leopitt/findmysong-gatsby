import PropTypes from "prop-types"
import React from "react"

const Page = ({ rows, children }) => {
  return (
    <main>{children}</main>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
