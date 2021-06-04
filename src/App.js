import React from "react";
import logo from "./logo.png";
import './App.css';

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
      <Dictionary defaultKeyword= "hygge" />
      </main>
      </div>
      <footer className="App-footer"><small>Coded by Blake Davies</small></footer>
    </div>
  );
}
