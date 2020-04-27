import PropTypes from "prop-types"
import React from "react"

import Button from "../button"

const NameForm = ({ name }) => (
  <form
    method="post"
    action="#"
    class="c-nameform"
  >
    <p>My name is <input type="text" required="required" name="name" value={name} />, <Button label="find my song" />.</p>
  </form>
)

NameForm.propTypes = {
  name: PropTypes.string,
}

NameForm.defaultProps = {
  name: ``,
}

export default NameForm
