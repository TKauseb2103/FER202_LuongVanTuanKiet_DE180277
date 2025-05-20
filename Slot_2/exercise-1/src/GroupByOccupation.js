import React from 'react';
import { people } from './peopleData';

function GroupByOccupation() {
  const groups = people.reduce((acc, person) => {
    acc[person.occupation] = acc[person.occupation] || [];
    acc[person.occupation].push(person);
    return acc;
  }, {});
  return (
    <div>
      <h2>Group by Occupation</h2>
      {Object.entries(groups).map(([occupation, group]) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((person, idx) => (
              <li key={idx}>{person.name} - {person.age}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation; 