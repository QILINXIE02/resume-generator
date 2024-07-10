import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const TemplateSelector = () => {
  const { dispatch } = useContext(ResumeContext);

  const handleTemplateChange = (template) => {
    dispatch({ type: 'SET_TEMPLATE', payload: template });
  };

  return (
    <div>
      <h2>Select Template</h2>
      <button onClick={() => handleTemplateChange('beginner')}>Beginner</button>
      <button onClick={() => handleTemplateChange('intermediate')}>Intermediate</button>
      <button onClick={() => handleTemplateChange('senior')}>Senior</button>
    </div>
  );
};

export default TemplateSelector;