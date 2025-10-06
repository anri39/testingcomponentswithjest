import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter and buttons, increments and resets', () => {
  render(<App />);
  const output = screen.getByText('0');
  expect(output).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('1')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /decrement/i }));
  expect(screen.getByText('0')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /switch signs/i }));
  expect(screen.getByText('0')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  fireEvent.click(screen.getByRole('button', { name: /increment/i }));
  expect(screen.getByText('2')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /reset/i }));
  expect(screen.getByText('0')).toBeInTheDocument();
});

