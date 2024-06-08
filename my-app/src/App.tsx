import React from 'react';
import Greeting from './features/example/pages/Welcome';
import Counter from './features/example/pages/Counter';
import CounterWithInput from './features/example/pages/CounterWithInput'
import TodoList from './features/example/pages/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Greeting name="Sara" age={25}/>
        <Greeting name="Cahal" age={30}/>
        <Greeting name="Edite"/>

        <CounterWithInput />

        <h1>Todo List</h1>
        <TodoList />
        
      </header>
    </div>
  );
};

export default App;
