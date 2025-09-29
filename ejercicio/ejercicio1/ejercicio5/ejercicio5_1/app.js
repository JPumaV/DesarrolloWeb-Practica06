class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5&format=json&origin=*')
      .then(result => result.json())
      .then(data => this.setState({ data: data.query.random }));
  }

  render() {
    return (
      <div className="api-container">
        <h1>React CDN - Experiencia 5: API Component</h1>
        <ul>
          {this.state.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Api />, document.getElementById('root'));
