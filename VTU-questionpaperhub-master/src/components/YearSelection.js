 import React, { useState } from 'react';
import SubjectPapers from './SubjectPapers';

const YearSelection = ({ selectedSubject }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const years = [2023, 2022, 2021, 2020]; // Add more years as needed

  return (
    <div>
      <h3>Selected Subject: {selectedSubject}</h3>
      <label>Select Year: </label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">--Select Year--</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {selectedYear && (
        <SubjectPapers subject={selectedSubject} year={selectedYear} />
      )}
    </div>
  );
};

export default YearSelection;
