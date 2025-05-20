import React from 'react';
import { people } from './peopleData';

function OldestAndYoungest() {
  if (people.length === 0) return <div>No people data.</div>;
  let oldest = people[0];
  let youngest = people[0];
  for (const p of people) {
    if (p.age > oldest.age) oldest = p;
    if (p.age < youngest.age) youngest = p;
  }
  return (
    <div>
      <h2>Oldest and Youngest</h2>
      <div>Oldest: {oldest.name} - {oldest.age} - {oldest.occupation}</div>
      <div>Youngest: {youngest.name} - {youngest.age} - {youngest.occupation}</div>
    </div>
  );
}

export default OldestAndYoungest; 