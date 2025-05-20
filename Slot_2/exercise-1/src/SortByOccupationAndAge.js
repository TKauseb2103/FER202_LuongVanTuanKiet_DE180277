import React from 'react';
import { people } from './peopleData';

function SortByOccupationAndAge() {
  const sorted = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    return a.age - b.age;
  });
  return (
    <div>
      <h2>Sorted by Occupation and Age</h2>
      <ul>
        {sorted.map((person, idx) => (
          <li key={idx}>{person.name} - {person.age} - {person.occupation}</li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationAndAge; 