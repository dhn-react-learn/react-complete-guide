import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  const assigedClasses = [];
  if (props.persons.length <= 2) {
    assigedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assigedClasses.push(classes.bold);
  }
  let btnClass = props.showPersons ? classes.Red : '';
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assigedClasses.join(' ')}>This is really working!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
    </div>
  );
};

export default Cockpit;
