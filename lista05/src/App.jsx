import { useState } from 'react';
import './App.css'
import React from 'react';
import Card from './components/card/Card';

function App() {
 return (
  <>
  <div className='container'>
  <h1 className='titulo'>Acesso à informação</h1>
  <h3 className='texto'>Veja dados de transparência e governança</h3>
  </div>

  <Card/>
  </>
  
 )
}

export default App
