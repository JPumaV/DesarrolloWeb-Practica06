const Greeting = ({ name }) => (
  <p className="greeting">Hola, {name}!</p>
);

const App = () => {
  const nombre = 'Estudiante';

  return (
    <div className="app-container">
      <h1>React CDN - Ejercicio 2: Simple Functional Components</h1>
      <p>This builds on Exercise 1 by adding a Greeting component.</p>
      <Greeting name={nombre} />
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
