import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

function App() {
  const [ativaCor, setAtivaCor] = useState(false);

  useEffect(() => {
    function posicaoScroll() {
      const porcScrollY = (window.scrollY / window.innerHeight) * 100;
      if (porcScrollY > 94) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Content acao={ativaCor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
