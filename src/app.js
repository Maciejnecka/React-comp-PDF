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
// class App extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
//   componentDidMount() {
//     this.id = setInterval(() => console.log('co sekunde...'), 1000);
//   }
//   // Gdy komponent zostanie zaktualizowany
//   componentDidUpdate() {
//     clearInterval(this.id);
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   render() {
//     return <h1>{this.state.counter}</h1>;
//   }

//   componentDidMount() {
//     this.id = setInterval(() => {
//       const { counter } = this.state;
//       this.setState({ counter: counter + 1 });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.id);
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   render() {
//     return <h1>{this.state.counter}</h1>;
//   }
//   componentDidMount() {
//     this.id = setInterval(
//       () => this.setState({ counter: this.state.counter + 1 }),
//       1000
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   render() {
//     return <h1>{this.state.counter}</h1>;
//   }
//   componentDidMount() {
//     const newState = (state, props) => {
//       const { counter } = state;
//       const { step } = props;
//       return {
//         counter: counter + step,
//       };
//     };
//     this.setState(newState);
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     const { step } = this.props;
//     this.state = {
//       step,
//       counter: 0,
//       users: [],
//       filters: {
//         name: '',
//       },
//     };
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      users: ['Jan Kowalski', 'Michał Nowak'],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  render() {
    const { users } = this.state;
    const usersList = users.map((name, index) => {
      return (
        <li key={index} onClick={this.clickHandler}>
          {name}
        </li>
      );
    });
    return <ul>{usersList}</ul>;
  }

  clickHandler() {
    console.log('Click!', this);
  }

  addUser(name) {
    this.setState({ users: [...this.state.users, name] });
  }

  removeUser(name) {
    const currUsers = this.state.users.filter((user) => user !== name);
    this.setState({ users: currUsers });
  }
}

root.render(<App />);
