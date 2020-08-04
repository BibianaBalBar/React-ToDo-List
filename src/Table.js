import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>To-Do</th>
        <th>When</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.listTodosData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.todo}</td>
        <td>{row.when}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {listTodosData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody listTodosData={listTodosData} />
      </table>
    )
  }
}

export default Table
