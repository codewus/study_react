import React from 'react';
import Welcome from './Welcome';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </header>
    </div>
  );
};

export default App;
