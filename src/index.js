import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './services/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
