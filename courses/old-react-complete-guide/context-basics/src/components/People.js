import React from 'react';

import Person from './Person';

const People = ({ people }) => people.map((person, index) => (
  <Person key={index} name={person.name} />
));

export default People;
