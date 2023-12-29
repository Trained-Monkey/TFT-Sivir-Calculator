import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Items to reach next interval/i);
  expect(linkElement).toBeInTheDocument();
});
