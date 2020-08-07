import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>To-Do</th>
        <th>When</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.listTodosData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.todo}</td>
        <td>{row.when}</td>
        <td>
          <button onClick={() => props.removeItem(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { listTodosData, removeItem } = props;

  return (
    <table>
      <TableHeader />
      <TableBody listTodosData={listTodosData} removeItem={removeItem} />
    </table>
  );
};

export default Table;
