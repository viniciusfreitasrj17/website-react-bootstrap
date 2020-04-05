import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
        <a className="navbar-brand" href="#" ><i class="fas fa-code"></i>&nbsp;Development</a>

        <section>
          <div className="navbar-nav" >
            <a className="nav-iten nav-link" href='#'>Home</a>
            <a className="nav-iten nav-link" href='#'>Channel</a>
            <a className="nav-iten nav-link" href='#'>Login</a>
          </div>
        </section>

        <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarMainToggler"
          aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default App;
