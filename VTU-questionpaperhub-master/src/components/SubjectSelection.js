import React from 'react';
import papersData from "../data/papers.json";
const SubjectSelection = ({ selectedSemester, selectedScheme, onSelect }) => {
  // Assuming you have access to papersData for filtering the subjects
  const subjects = papersData
    .filter((p) => p.semester === selectedSemester && p.scheme === selectedScheme)
    .map((p) => p.subject);

  return (
    <div>
      {subjects.length > 0 ? (
        subjects.map((subject, index) => (
          <button key={index} onClick={() => onSelect(subject)}>
            {subject}
          </button>
        ))
      ) : (
        <p>No subjects available for this semester and scheme.</p>
      )}
    </div>
  );
};

export default SubjectSelection;
