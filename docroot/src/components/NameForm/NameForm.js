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

  handleSubmit = event => {
    event.preventDefault()
    // See https://reactjs.org/docs/faq-ajax.html
    fetch(`http://admin.findmysong.function-designing.co.uk/lyric-lookup/${this.state.inputName}`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Response status not 200. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response.
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

    console.log(`Submitted ${this.state.inputName}`)
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
