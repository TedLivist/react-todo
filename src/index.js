import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './components/todoContainer';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
