import { render, screen } from '@testing-library/react';
import App from './App';

// 'renders learn react link' origin
test('renders test', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
