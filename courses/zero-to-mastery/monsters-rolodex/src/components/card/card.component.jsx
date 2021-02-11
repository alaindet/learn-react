import React from 'react';

import './card.style.css';

export const Card = ({ monster }) => {
  return (
    <div className="card">
      <div className="header">
        <h2 className="title">{monster.name}</h2>
        <h3 className="subtitle">{monster.email}</h3>
      </div>
      <img
        src={`https://robohash.org/${monster.name}?set=set2`}
        alt={monster.name}
        className="img"
      />
    </div>
  );
};
