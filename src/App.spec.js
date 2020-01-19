import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
// import 'react-testing-library/clea'
describe('App', () => {
  it('Renders without error', () => {
    render(<App />);
  });
});
