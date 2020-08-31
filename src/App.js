import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: 'somet other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximillian", age: 27 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 },
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 27 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed={nameChangedHandler}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} changed={nameChangedHandler}>My hobbie: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} changed={nameChangedHandler}/>
    </div>
  );
}

export default App;
