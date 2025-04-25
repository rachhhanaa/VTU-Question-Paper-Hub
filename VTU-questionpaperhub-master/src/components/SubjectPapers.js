
import React from 'react';
import papersData from './QuestionPapers'; // Load your papers.json file

const SubjectPapers = ({ subject, year }) => {
  const papers = papersData[subject]?.[year]; // Get papers for the selected subject and year

  return (
    <div>
      <h3>Question Papers for {subject} - {year}</h3>
      {papers ? (
        <ul>
          {papers.map((paper, index) => (
            <li key={index}>
              <a href={paper} target="_blank" rel="noopener noreferrer">
                {`Paper ${index + 1}`}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No papers available for this selection.</p>
      )}
    </div>
  );
};

export default SubjectPapers;
