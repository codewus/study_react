import React, { useState } from 'react';

const CounterWithInput: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>You typed: {text}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default CounterWithInput;
