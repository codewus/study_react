// Welcome.tsx
import React from 'react';

interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return <h1>Hello, {name}. You are {age} years old.</h1>;
};

export default Greeting;
