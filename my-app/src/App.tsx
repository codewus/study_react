import React from 'react';
import Greeting from './Welcome';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Greeting name="Sara" age={25}/>
        <Greeting name="Cahal" age={30}/>
        <Greeting name="Edite"/>
      </header>
    </div>
  );
};

export default App;
