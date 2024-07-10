// src/components/ResumeForm.js
import React, { useContext } from 'react';
import { ResumeContext } from '../context/ResumeContext';

const ResumeForm = () => {
  const { state, dispatch } = useContext(ResumeContext);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_PERSONAL_INFO',
      payload: { ...state.personalInfo, [name]: value }
    });
  };

  return (
    <div>
      <h2>Resume Form</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={state.personalInfo.name || ''} onChange={handlePersonalInfoChange} />
        </label>
        {/* Add more form fields as needed */}
      </form>
    </div>
  );
};

export default ResumeForm;
