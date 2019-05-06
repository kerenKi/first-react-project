import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hello world!
        </p>
        <h3>Welcome to Codaisseur</h3>
        <h2>is it working?</h2>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Title />
      </main>
    </div>
  );
}

export default App;
