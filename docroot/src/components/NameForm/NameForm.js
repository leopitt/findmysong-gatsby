import PropTypes from "prop-types"
import React from "react"

import Button from "../Button/Button"

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleResults = this.handleResults.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      inputName: "",
      isFormValid: false,
    }
  }

  // Handle input field change.
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
    // Form is valid when the input value is set.
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

  handleResults = (data) => {
    this.props.onResultsChange(data);
  }

  handleError = (err) => {
    console.log('Fetch Error :-S', err);
    this.props.onResultsChange({});
  }

  // Handle form submit.
  handleSubmit = event => {
    event.preventDefault()
    // See https://reactjs.org/docs/faq-ajax.html
    fetch(`http://admin.findmysong.function-designing.co.uk/lyric-lookup/${this.state.inputName}`)
      .then(response => {
        if (response.status !== 200) {
          console.log('Response status not 200. Status Code: ' +
            response.status);
          return;
        }
        return response.json()
      })
      .then(data => this.handleResults(data))
      .catch(err => this.handleError(err))

    console.log(`Submitted ${this.state.inputName}`)
  }

  // Render the form.
  render() {
    return <form
      method="post"
      className="c-nameform"
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
  onResultsChange: PropTypes.func,
}

NameForm.defaultProps = {
  onResultsChange: null,
}
