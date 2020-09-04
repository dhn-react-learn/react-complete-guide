import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ]
  });

  const [showPersonsState, setShowPersonsState] = useState(true);

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: "Max", age: 27 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ]
    })
  }

  const deletePersonHandler = (index) => {
    // const persons = personsState.persons;
    const persons = [...personsState.persons]
    persons.splice(index, 1);
    setPersonsState({ persons });
  }

  const tooglePersonHandler = () => {
    setShowPersonsState(!showPersonsState);
  }

  let persons = null;
  if (showPersonsState) {
    persons = (
      <div>
        {personsState.persons.map((p, index) => 
          <Person name={p.name} age={p.age} click={() => deletePersonHandler(index)} />
        )}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!!!</p>
      <button onClick={tooglePersonHandler}>Toggle People</button>
      {persons}
    </div>
  );
}

export default App;
