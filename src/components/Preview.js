// src/components/Preview.js
import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const Preview = () => {
  const { state } = useContext(ResumeContext);

  return (
    <div>
      <h2>Resume Preview</h2>
      <div>
        <h3>{state.personalInfo.name}</h3>
        {/* Display other parts of the resume */}
      </div>
    </div>
  );
};

export default Preview;
