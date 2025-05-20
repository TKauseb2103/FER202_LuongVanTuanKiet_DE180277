import React from 'react';
import { people } from './peopleData';

function AverageAgeByOccupation() {
  const occupationAges = people.reduce((acc, person) => {
    acc[person.occupation] = acc[person.occupation] || [];
    acc[person.occupation].push(person.age);
    return acc;
  }, {});
  return (
    <div>
      <h2>Average Age by Occupation</h2>
      <ul>
        {Object.entries(occupationAges).map(([occupation, ages]) => {
          const avg = (ages.reduce((a, b) => a + b, 0) / ages.length).toFixed(2);
          return <li key={occupation}>{occupation}: {avg}</li>;
        })}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation; 