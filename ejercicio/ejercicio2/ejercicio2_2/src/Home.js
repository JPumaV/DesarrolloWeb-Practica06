import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import Api from './Api';

const Home = () => {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'Lionel Messi', job: 'Futbolista' },
    { name: 'Cristiano Ronaldo', job: 'Futbolista' },
    { name: 'Neymar Jr', job: 'Futbolista' }
  ]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const removeCharacter = (index) => {
    setCharacters(characters.filter((_, i) => i !== index));
  };

  const handleSubmit = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };

  const nombre = 'Estudiante';

  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola! Mi primera aplicación React con CRA</h1>
        <p className="intro">Esta es la configuración profesional usando Create React App</p>
        <p>Hola, {nombre}!</p>
        <img src="/logo192.png" alt="React Logo" />
        <br />

        <div className="counter-section">
          <h2>Contador: {count}</h2>
          <button onClick={handleIncrement}>
            Incrementar
          </button>
          <button onClick={handleDecrement}>
            Decrementar
          </button>
          <button onClick={handleReset}>
            Resetear
          </button>
        </div>

        <Table characterData={characters} removeCharacter={removeCharacter} />

        <Form onSubmit={handleSubmit} />

        <Api />

        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
      </header>
    </div>
  );
};

export default Home;
