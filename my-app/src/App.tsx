import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './features/example/pages/Home';
import About from './features/example/pages/About';
import UserProfile from './features/example/pages/UserProfile';
import LoginPage from './features/auth/pages/LoginPage';
import { User } from './features/example/services/UserService';
import './styles/global.css'; // 전역 스타일을 import

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchedUsers: User[] = [
      { id: '1', name: 'John Doe', age: 30 },
      { id: '2', name: 'Jane Smith', age: 25 }
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id/*" element={<UserProfile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
