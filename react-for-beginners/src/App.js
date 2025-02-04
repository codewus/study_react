import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail></Detail>} />
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </Router>
  );
}

export default App;
