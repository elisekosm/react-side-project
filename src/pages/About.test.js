import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';

test('renders About component', () => {
  render(<About />);
  expect(screen.getByText('About Page')).toBeInTheDocument();
  expect(screen.getByText(/This is an exploratory React app made by Elise/i)).toBeInTheDocument();
});

test('GitHub button click opens GitHub page', () => {
  window.open = jest.fn();
  render(<About/>);
  fireEvent.click(screen.getByAltText('github-icon'));
  expect(window.open).toHaveBeenCalledWith('https://github.com/elisekosm');
});

test('LinkedIn button click opens LinkedIn page', () => {
  window.open = jest.fn();
  render(<About/>);
  fireEvent.click(screen.getByAltText('linkedin-icon'));
  expect(window.open).toHaveBeenCalledWith('https://www.linkedin.com/in/elise-kosmides/');
});
