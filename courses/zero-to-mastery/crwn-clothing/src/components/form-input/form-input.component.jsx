import React from 'react';

import './form-input.style.scss';
import { pickClassNames } from '../../utils/pick-classnames.util';

export const FormInput = ({ handleChange, label, ...props }) => {

  const classNames = pickClassNames({
    'form-input-label': true,
    'shrink': !!props.value.length,
  });

  return (
    <div className="form-input-group">
      <input className="form-input" onChange={handleChange} {...props} />
      {label && <label className={classNames}>{label}</label>}
    </div>
  );
};
