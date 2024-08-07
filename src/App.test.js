import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders header', () => {
  render(<BrowserRouter>
      <App />
    </BrowserRouter>)
  const headerElement = screen.getByText(/Elise's Demo React Project/);
  expect(headerElement).toBeInTheDocument();
});
