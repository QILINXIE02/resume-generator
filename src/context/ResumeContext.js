// src/context/ResumeContext.js
import React, { createContext, useReducer } from 'react';

const ResumeContext = createContext();

const initialState = {
  template: 'beginner',
  personalInfo: {},
  workExperience: [],
  education: [],
  skills: [],
  // Add other fields as necessary
};

function resumeReducer(state, action) {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return { ...state, template: action.payload };
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };
    // Add more cases for other actions
    default:
      return state;
  }
}

const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export { ResumeContext, ResumeProvider };
