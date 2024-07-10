import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import TemplateSelector from './components/TemplateSelector';
import ResumeForm from './components/ResumeForm';
import Preview from './components/Preview';
import ExportButtons from './components/ExportButtons';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ResumeProvider>
      <GlobalStyles />
      <div className="App">
        <TemplateSelector />
        <ResumeForm />
        <Preview />
        <ExportButtons />
      </div>
    </ResumeProvider>
  );
}

export default App;
