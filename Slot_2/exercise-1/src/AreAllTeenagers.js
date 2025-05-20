import React from 'react';
import { people } from './peopleData';

function AreAllTeenagers() {
  const allTeens = people.every(p => p.age >= 13 && p.age <= 19);
  return (
    <div>
      <h2>Are All Teenagers?</h2>
      <div>{allTeens ? 'Yes, all are teenagers.' : 'No, not all are teenagers.'}</div>
    </div>
  );
}

export default AreAllTeenagers; 