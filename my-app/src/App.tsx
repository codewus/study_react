import React from 'react';
import { AuthProvider } from './features/auth/context/AuthContext';
import { ThemeProvider } from './features/theme/context/ThemeContext';
import { NotificationProvider } from './features/notification/context/NotificationContext';
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
