import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const listTodos = [
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
    ]

    return (
      <div className="container">
        <Table listTodosData={listTodos} />
      </div>
    )
  }
}

  export default App