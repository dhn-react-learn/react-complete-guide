import React, { useState } from 'react';
import classes from './App.css';

import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "Manu", age: 29 },
      { id: '3', name: "Stephanie", age: 26 },
    ]
  });

  const [showPersonsState, setShowPersonsState] = useState(true);

  const nameChangedHandler = (key) => {
    return (event) => {
      const persons = [...personsState.persons];
      persons.find(p => p.id === key).name = event.target.value;
      setPersonsState({ persons })
    }
  }

  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons]
    persons.splice(index, 1);
    setPersonsState({ persons });
  }

  const tooglePersonHandler = () => {
    setShowPersonsState(!showPersonsState);
  }
  let btnClass = ''

  let persons = null;
  if (showPersonsState) {
    persons = (
      <div>
        {personsState.persons.map((p, index) => 
          <Person
            key={p.id}
            name={p.name}
            age={p.age}
            click={() => deletePersonHandler(index)} 
            changed={nameChangedHandler(p.id)}
          />
        )}
      </div>
    );

    btnClass = classes.Red;
  }

  const assigedClasses = [];
  if (personsState.persons.length <= 2) {
    assigedClasses.push(classes.red);
  }
  if (personsState.persons.length <= 1) {
    assigedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={assigedClasses.join(' ')}>This is really working!!!</p>
      <button
        className={btnClass}
        onClick={tooglePersonHandler}
      >
        Toggle People
      </button>
      {persons}
    </div>
  );
}

export default App;
