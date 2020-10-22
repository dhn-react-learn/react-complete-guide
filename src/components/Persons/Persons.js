import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps', props);
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return (
      <div>
        {this.props.persons.map((p, index) => (
          <Person
            key={p.id}
            name={p.name}
            age={p.age}
            click={() => this.props.clicked(index)}
            changed={this.props.changed(p.id)}
          />
        ))}
      </div>
    );
  }
}

export default Persons;
