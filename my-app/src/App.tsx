import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './features/example/pages/Home';
import About from './features/example/pages/About';
import UserProfile from './features/example/pages/UserProfile';
import LoginPage from './features/auth/pages/LoginPage';
import { AuthProvider, useAuth } from './features/auth/context/AuthContext';
import { ThemeProvider } from './features/theme/context/ThemeContext';
import { NotificationProvider } from './features/notification/context/NotificationContext';
import { User } from './features/example/services/UserService';
import LogoutButton from './features/auth/components/LogoutButton';
import ProtectedRoute from './features/auth/components/ProtectedRoute';
import AppContent from './AppContent';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
