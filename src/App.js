import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  state = {
    listTodos: [
      {
        todo: 'laundry',
        when: 'today',
      },
      {
        todo: 'call doc',
        when: 'today',
      },
      {
        todo: 'clean kichen',
        when: 'tomorrow',
      },
      {
        todo: 'cook',
        when: 'today',
      }
    ],
  }

  removeItem = (index) => {
    const {listTodos} = this.state
  
    this.setState({
      listTodos: listTodos.filter((listTodo, i) => {
        return i !== index
      }),
    })
  }  

  render() {
    const { listTodos } = this.state

    return (
      <div className="container">
        <Table listTodosData={listTodos} removeItem={this.removeItem} />
      </div>
    )
  }
}

  export default App