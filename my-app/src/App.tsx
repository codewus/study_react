import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChartExample from './features/chart/components/ChartExample';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChartExample />} />
      </Routes>
    </Router>
  );
};

export default App;
