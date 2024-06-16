// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdvancedGrid from './features/grid/components/AdvancedGrid';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdvancedGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
