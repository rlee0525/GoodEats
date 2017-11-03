import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('passes the store as a prop to the Root component', () => {
  const div = document.createElement('div');
  const renderedDom = ReactDOM.render(<App />, div);
  expect(renderedDom.props.store).toEqual({ storeKey: 'storeValue' });
});