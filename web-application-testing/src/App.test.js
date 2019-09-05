import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard, { addStrike, addBall } from './components/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains Balls and Strikes display', () => {
  // Arrange
  const container = render(<App />);
  // Act - getting the node by text
  container.getByText(/balls/i);
  container.getByText(/strikes/i);
  // Assertion is if ^^^ is truthy
});

test('contains foul button', () => {
  // Arrange
  const container = render(<App />);
  // Act - getting the node by text
  container.getByTestId(/foul/i);
  // Assertion is if ^^^ is truthy
});