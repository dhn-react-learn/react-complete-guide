import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 26 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (key) => {
    return (event) => {
      const persons = [...this.state.persons];
      persons.find(p => p.id === key).name = event.target.value;
      this.setState((prevState, props) => {
        return {
          persons,
          changeCounter: prevState.changeCounter + 1
        }
      });
    }
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({ 
      ...this.state,
      persons
    });
  }

  tooglePersonHandler = () => {
    this.setState({
      ...this.state,
      showPersons: !this.state.showPersons
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {
    console.log('[App.js] rendering...');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }
  
    return (
      <Aux>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit && 
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.tooglePersonHandler}>
          </Cockpit>}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
