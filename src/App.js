import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    listTodos: [],
  }

  removeItem = (index) => {
    const {listTodos} = this.state
  
    this.setState({
      listTodos: listTodos.filter((listTodo, i) => {
        return i !== index
      }),
    })
  }  

  handleSubmit = (listTodo) => {
    this.setState({listTodos: [...this.state.listTodos, listTodo]})
  }

  render() {
    const { listTodos } = this.state

    return (
      <div className="container">
        <h1>React To-Do List</h1>
        <p>List here your To-Dos.</p>
        <Table listTodosData={listTodos} removeItem={this.removeItem} />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

  export default App