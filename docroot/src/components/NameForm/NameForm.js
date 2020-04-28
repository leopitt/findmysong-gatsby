import PropTypes from "prop-types"
import React from "react"

import Button from "../Button/Button"

export default class NameForm extends React.Component {
  state = {
    inputName: "",
    isFormValid: false,
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    if (value.length > 0) {
      this.setState({
        isFormValid: true,
      })
    } else {
      this.setState({
        isFormValid: false,
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return <form
      method="post"
      class="c-nameform"
     onSubmit={this.handleSubmit}
    >
      <p>My name is
        <input
          type="text"
          required="required"
          name="inputName"
          value={this.state.inputName}
          onChange={this.handleInputChange}
        />,
        <Button className="c-button c-button--big-text c-button--disabled" disabled={!this.state.isFormValid} label="find my song" />.</p>
    </form>
  }
}

NameForm.propTypes = {
  inputName: PropTypes.string,
}

NameForm.defaultProps = {
  inputName: ``,
}
