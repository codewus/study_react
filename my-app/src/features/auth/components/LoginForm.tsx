import React, { useState } from 'react';
import './LoginForm.css'; // 스타일 파일을 import 합니다.

// LoginForm 컴포넌트 정의
const LoginForm: React.FC = () => {
  // 상태 변수 선언
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 폼 제출 핸들러
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // 유효성 검사
    if (email === '' || password === '') {
      setError('Both fields are required');
      return;
    }

    // 이메일 형식 유효성 검사 (간단한 정규식 사용)
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    // 로그인 처리 로직 (여기서는 예제이므로 단순히 콘솔 로그를 출력)
    console.log('Email:', email);
    console.log('Password:', password);

    // 상태 초기화
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
