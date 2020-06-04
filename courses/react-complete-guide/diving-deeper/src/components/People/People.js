import React from 'react';

import Person from './../Person/Person';

const People = ({ people, edit, remove }) => (
  <React.Fragment>
    {people.map(person => (
      <Person
        key={person.id}
        data={person}
        edit={edit}
        remove={remove}
      />
    ))}
  </React.Fragment>
);

export default People;
