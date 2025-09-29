const App = () => {
  const nombre = 'Estudiante';

  return (
    <div className="app-container">
      <h1>Hello from React CDN Setup!</h1>
      <p>Hola, {nombre}!</p>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
