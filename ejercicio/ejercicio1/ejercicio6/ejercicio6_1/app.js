const Home = () => {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>This is the home page.</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="page">
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 'home' };
  }

  render() {
    return (
      <div className="app-container">
        <nav>
          <button onClick={() => this.setState({ currentPage: 'home' })}>Home</button>
          <button onClick={() => this.setState({ currentPage: 'about' })}>About</button>
        </nav>
        {this.state.currentPage === 'home' ? <Home /> : <About />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
