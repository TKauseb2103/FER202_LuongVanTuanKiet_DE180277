import React from 'react';
import { people } from './peopleData';

function PeopleList() {
  return (
    <div className="people-list">
      <h2>People List</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.age} years old - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList; 