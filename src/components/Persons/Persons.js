import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
  return (
    <div>
      {props.persons.map((p, index) => (
        <Person
          key={p.id}
          name={p.name}
          age={p.age}
          click={() => props.clicked(index)}
          changed={props.changed(p.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
