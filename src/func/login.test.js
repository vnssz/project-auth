import { render, screen } from '@testing-library/react';
import Login from './login';

test('renders Login', () => {
  render(<App />);
  const linkElement = screen.getByText(/SignIn/i);
  expect(linkElement).toBeInTheDocument();
});
