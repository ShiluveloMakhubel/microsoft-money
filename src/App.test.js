import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Money heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Money/i);
  expect(headingElement).toBeInTheDocument();
});
