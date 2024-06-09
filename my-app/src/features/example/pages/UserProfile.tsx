import React, { useEffect, useState } from 'react';
import { useParams, Routes, Route, Link } from 'react-router-dom';
import UserDetail from './UserDetail';
import { getUserById, User } from '../services/UserService';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>(); //useParams 훅을 사용하여 URL의 동적 파라미터에 접근합니다.
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) { // id가 존재하는 경우에만 getUserById 호출
      const fetchedUser = getUserById(id);
      if (fetchedUser) {
        setUser(fetchedUser);
      }
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile for user ID: {id}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <nav>
        <Link to="details">Details</Link>
      </nav>
      <Routes>
        <Route path="details" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default UserProfile;
