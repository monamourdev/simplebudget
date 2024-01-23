import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { useState } from 'react';

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
    </div>

  );
}

export default App;
