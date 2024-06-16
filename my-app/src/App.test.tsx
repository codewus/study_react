import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import AppContent from './AppContent';
import { AuthProvider } from './features/auth/context/AuthContext';

describe('AppContent', () => {
  test('renders Home and About links', () => {
    render(
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  test('redirects to login for protected routes', async () => {
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={['/user/1']}>
          <AppContent />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(await screen.findByText(/login/i)).toBeInTheDocument();
  });
});
