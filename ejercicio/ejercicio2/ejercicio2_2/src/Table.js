import React from 'react';

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
    </tr>
  </thead>
);

const TableBody = ({ characterData, removeCharacter }) => (
  <tbody>
    {characterData.map((character, index) => (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
);

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody characterData={this.props.characterData} removeCharacter={this.props.removeCharacter} />
      </table>
    );
  }
}

export default Table;
