import React from 'react';
import { people } from './peopleData';

function PersonDetails() {
  return (
    <div className="person-details">
      <h2>Person Details</h2>
      {people.map((person, index) => (
        <div key={index} className="person-card">
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonDetails; 