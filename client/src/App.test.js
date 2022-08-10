import { render, screen } from '@testing-library/react';
import App from './App';

test('Should App component successfully render', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
