import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {initialState} from './reducer';
import {StateProvider} from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App /> {/* here we are wrapping App inside of a data layer (StateProvider)*/}
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
