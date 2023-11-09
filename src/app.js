'use strict';
import React from 'react';
import './style.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

// Montowanie oraz aktualizacja
// class App extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

// Tylko raz przy montowaniu
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   render() {
//     return <h1>{this.state.counter}</h1>;
//   }
// }

// Uruchamianie na etapie montowani
class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
  componentDidMount() {
    this.id = setInterval(() => console.log('co sekunde...'), 1000);
  }
  // Gdy komponent zostanie zaktualizowany
  componentDidUpdate() {
    clearInterval(this.id);
  }
}

root.render(<App />);
