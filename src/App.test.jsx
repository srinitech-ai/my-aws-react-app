import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const heading = screen.getByText(/Hello,World/i);
  expect(heading).toBeInTheDocument();
});
