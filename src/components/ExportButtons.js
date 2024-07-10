// src/components/ExportButtons.js
import React from 'react';

const ExportButtons = () => {
  const handleExportPDF = () => {
    // Implement PDF export logic
  };

  const handleExportWord = () => {
    // Implement Word export logic
  };

  return (
    <div>
      <button onClick={handleExportPDF}>Export as PDF</button>
      <button onClick={handleExportWord}>Export as Word</button>
    </div>
  );
};

export default ExportButtons;
