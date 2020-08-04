import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    todo: '',
    when: '',
  }
  
  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { todo, when } = this.state;
  
    return (
      <form>
        <label htmlFor="todo">To-Do</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={this.handleChange} />
        <label htmlFor="when">When</label>
        <input
          type="text"
          name="when"
          id="when"
          value={when}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form
