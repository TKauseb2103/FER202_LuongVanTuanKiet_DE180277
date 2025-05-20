import React from 'react';
import './PeopleTable.css';
import { people } from './peopleData';

function PeopleTable() {
  return (
    <div className="people-table-container">
      <h2>People Table</h2>
      <table className="people-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable; 