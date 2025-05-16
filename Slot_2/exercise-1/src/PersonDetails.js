import React from 'react';

function PersonDetails() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 28, occupation: "Doctor" }
  ];

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