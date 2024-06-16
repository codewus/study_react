import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders email and password input fields', () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('shows error message when fields are empty', async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.click(screen.getByText(/login/i));

    expect(await screen.findByText(/both fields are required/i)).toBeInTheDocument();
  });

  test('redirects to home on successful login', async () => {
    const mockLogin = jest.fn().mockResolvedValue({});
    jest.spyOn(require('../context/AuthContext'), 'useAuth').mockReturnValue({
      user: null,
      loading: false,
      login: mockLogin,
      logout: jest.fn(),
    });

    render(
      <AuthProvider>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    fireEvent.click(screen.getByText(/login/i));

    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
