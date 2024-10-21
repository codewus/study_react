import { useEffect, useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect: 주어진 state 변수의 변화를 감지해서 실행시키는 함수, 내가 원할 때 실행시킬 수 있다. 값이 없다면 한번만 실행된다.(감지할 변수가 없기 때문)
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' && 'counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder='Search here...'/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
