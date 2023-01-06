import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
