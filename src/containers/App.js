import React, { useState } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  let persons = null;
  if (showPersonsState) {
    persons = (
      <Persons
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      ></Persons>
    );
  }

  return (
    <div className={classes.App}>
      <Cockpit
        persons={personsState}
        showPersons={showPersonsState}
        clicked={tooglePersonHandler}></Cockpit>
      {persons}
    </div>
  );
}

export default App;
