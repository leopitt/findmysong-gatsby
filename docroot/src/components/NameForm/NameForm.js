import PropTypes from "prop-types"
import React from "react"

import Button from "../Button/Button"

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.minSize = 4;
    this.sizePad = 1;
    this.handleResults = this.handleResults.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      inputName: "",
      isFormValid: false,
      size: 4,
      hasBeenSearched: false,
    }
  }

  // Handle input field change.
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    let size = this.minSize

    if (value.length === 0) {
      size = this.minSize
    } else {
      size = value.length + this.sizePad
    }

    this.setState({
      inputName: value,
      size: size,
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
    this.props.onResultsChange({});
  }

  handleSearch() {
    this.props.onSearch();
  }

  getInputClassNames() {
    if (!this.state.isFormValid) {
      return 'c-nameform__input c-nameform__input--throb'
    } else {
      return 'c-nameform__input'
    }
  }

  // Handle form submit.
  handleSubmit = event => {
    event.preventDefault()
    this.handleSearch()
    // See https://reactjs.org/docs/faq-ajax.html
    fetch(`//admin.findmysong.function-designing.co.uk/lyric-lookup/${this.state.inputName}`)
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
  }

  // Render the form.
  render() {
    return <form
      method="post"
      className="c-nameform"
      onSubmit={this.handleSubmit}
    >
      <label className="c-nameform__label"><span className="c-nameform__label__inner">My name is</span>
        <span className="c-nameform__input-wrapper">
          <input
            className={this.getInputClassNames()}
            size={this.state.size}
            name="inputName"
            onChange={this.handleInputChange}
            required="required"
            type="text"
            value={this.state.inputName}
          />.
        </span>
        <Button className="c-button c-button--big-text c-button--no-left-pad c-button--disabled c-button--throb" disabled={!this.state.isFormValid} label="find my song." /></label>
    </form>
  }
}

NameForm.propTypes = {
  onResultsChange: PropTypes.func,
}

NameForm.defaultProps = {
  onResultsChange: null,
}
