import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './features/example/pages/Home';
import About from './features/example/pages/About';
import UserProfile from './features/example/pages/UserProfile';
import LoginPage from './features/auth/pages/LoginPage';
import { useAuth } from './features/auth/context/AuthContext';
import { User } from './features/example/services/UserService';
import LogoutButton from './features/auth/components/LogoutButton';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import GridExample from './features/grid/components/GridExample';

const AppContent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { user } = useAuth();

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
          <li>
            <a href="/grid">Grid Example</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
          
          {user && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/grid" element={<GridExample />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user/:id/*" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppContent;
