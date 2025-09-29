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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        { name: 'Lionel Messi', job: 'Futbolista' },
        { name: 'Cristiano Ronaldo', job: 'Futbolista' },
        { name: 'Neymar Jr', job: 'Futbolista' }
      ]
    };
    this.removeCharacter = this.removeCharacter.bind(this);
  }

  removeCharacter(index) {
    this.setState({
      characters: this.state.characters.filter((_, i) => i !== index)
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1>React CDN - Experiencia 3: Table Component</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
