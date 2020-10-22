import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toogleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http requests...
    // const timer = setTimeout(() => {
    //   alert('Save to the cloud!');
    // }, 5000);
    toogleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
      // clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assigedClasses = [];
  if (props.personsLength <= 2) {
    assigedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assigedClasses.push(classes.bold);
  }
  let btnClass = props.showPersons ? classes.Red : '';
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assigedClasses.join(' ')}>This is really working!!!</p>
      <button ref={toogleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
