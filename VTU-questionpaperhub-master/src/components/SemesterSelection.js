import React from 'react';

const SemesterSelection = ({ onSelect }) => {
  return (
    <div>
      <h2>Select Semester</h2>
      <button onClick={() => onSelect('Semester 1')}>Semester 1</button>
      <button onClick={() => onSelect('Semester 2')}>Semester 2</button>
      {/* Add more semesters as needed */}
    </div>
  );
};

export default SemesterSelection;
