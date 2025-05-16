import React from 'react';

function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Doctor" }
  ];

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