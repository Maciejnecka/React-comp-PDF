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

// class App extends React.Component {
//   state = {
//     searchQuery: '',
//     users: ['Jan Kowalski', 'Michał Nowak'],
//   };
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { users } = this.state;
//     const usersList = users.map((name, index) => {
//       return (
//         <li key={index} onClick={this.clickHandler}>
//           {name}
//         </li>
//       );
//     });
//     return <ul>{usersList}</ul>;
//   }

//   clickHandler = (e) => {
//     const { innerText: userName } = e.target;
//     this.removeUser(userName);
//   };

//   addUser(name) {
//     this.setState({ users: [...this.state.users, name] });
//   }

//   removeUser(name) {
//     const currUsers = this.state.users.filter((user) => user != name);
//     this.setState({ users: currUsers });
//   }
// }

// class App extends React.Component {
//   clickHandler = (e) => this.printEventType(e);
//   mouseEnterHandler = (e) => this.printEventType(e);
//   printEventType(e) {
//     console.log(e.type);
//   }
//   render() {
//     return (
//       <div onClick={this.clickHandler} onMouseEnter={this.mouseEnterHandler}>
//         Events!
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   divClickHandler = (e) => {
//     console.log(e.currentTarget.tagName);
//   };
//   aClickHandler = (e) => {
//     e.preventDefault();
//     console.log(e.currentTarget.tagName);
//   };
//   render() {
//     return (
//       <div onClick={this.divClickHandler}>
//         <a href="https://devmentor.pl" onClick={this.aClickHandler}>
//           Link!
//         </a>
//         Text
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     firstName: '',
//     lastName: '',
//     searchQuery: '',
//     users: ['Jan Kowalski', 'Michał Nowak'],
//   };
//   renderUsersList() {
//     const { users } = this.state;
//     return users.map((name, index) => {
//       return (
//         <li key={index} onClick={this.clickHandler}>
//           {name}
//         </li>
//       );
//     });
//   }

//   render() {
//     const { firstName, lastName } = this.state;
//     return (
//       <section>
//         <form>
//           <input
//             name="firstName"
//             value={firstName}
//             onChange={this.inputChange}
//           />
//           <input name="lastName" value={lastName} onChange={this.inputChange} />
//           <input type="submit" />
//         </form>
//         <ul>{this.renderUsersList()}</ul>
//       </section>
//     );
//   }

//   submitHandler = (e) => {
//     e.preventDefault();
//     const { firstName, lastName } = this.state;
//     if (firstName && lastName) {
//       this.addUser(`${firstName} ${lastName}`);
//       this.setState({ firstName: '', lastName: '' });
//     } else {
//       // komunikat
//     }
//   };

//   addUser(name) {
//     this.setState({
//       users: [...this.state.users, name],
//     });
//   }

//   inputChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

// firstNameChange = (e) => {
//   this.setState({ firstName: e.target.value });
// };

// lastNameChange = (e) => {
//   this.setState({ lastName: e.target.value });
// };
// }

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    searchQuery: '',
    users: ['Jan Kowalski', 'Michał Nowak'],
  };

  renderUsersList() {
    const { users } = this.state;
    return users.map((name, index) => {
      return (
        <li key={index} onClick={this.clickHandler}>
          {name}
        </li>
      );
    });
  }

  clickHandler = (e) => {
    const { innerText: userName } = e.target;
    this.removeUser(userName);
  };

  inputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { select, textarea } = this.state;
    return (
      <form>
        <p>
          <select value={select} onChange={this.changeHandler}>
            <option value="1">jeden</option>
            <option>dwa</option>
          </select>
        </p>
        <p>
          <textarea value={textarea} onChange={this.changeHandler} />
        </p>
      </form>
    );
  }

  changeHandler = (e) => {
    const { tagName, value } = e.target;
    this.setState({ [tagName.toLowerCase()]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName } = this.state;
    if (firstName && lastName) {
      this.addUser(`${firstName} ${lastName}`);
      this.setState({
        firstName: '',
        lastName: '',
      });
    } else {
      // tutaj komunikat dla użytkownika
    }
  };

  addUser(name) {
    this.setState({
      users: [...this.state.users, name],
    });
  }

  removeUser(name) {
    const currUsers = this.state.users.filter((user) => user != name);

    this.setState({
      users: currUsers,
    });
  }
}

root.render(<App />);

root.render(<App />);
