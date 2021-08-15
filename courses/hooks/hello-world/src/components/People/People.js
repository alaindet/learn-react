import React from 'react';

import { Person } from '../Person/Person';
import { makeGreen } from '../../hocs/makeGreen';
import { removeInlineStyle } from '../../hocs/removeInlineStyle';
import './People.scss';

const PersonWithGreenText = makeGreen(Person);
const PersonWithoutStyleAttribute = removeInlineStyle(PersonWithGreenText);

export const People = ({ people }) => {

  return (
    <ul className="people">
      {people.map((person, index) => (
        <PersonWithoutStyleAttribute key={index} {...person} />
      ))}
    </ul>
  );
};