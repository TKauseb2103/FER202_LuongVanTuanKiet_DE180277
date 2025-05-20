import React from 'react';
import { people } from './peopleData';

function FirstTeenager() {
  const firstTeen = people.find(p => p.age >= 13 && p.age <= 19);
  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeen ? (
        <div>{firstTeen.name} - {firstTeen.age} years old - {firstTeen.occupation}</div>
      ) : (
        <div>No teenager found.</div>
      )}
    </div>
  );
}

export default FirstTeenager; 