/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Application renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});