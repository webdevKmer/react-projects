import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data)
 
  return (
      <section className="container">
          <h3>{persons.length} Birthdays today</h3>
          {persons.map(person => (<List key={person.id} {...person} />))}
          <button onClick={() => setPersons([])}>Clear All</button>
        </section>
    );
}

export default App;
