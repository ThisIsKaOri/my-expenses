import React from 'react';
import logo from './logo.svg';
import './App.css';

import { expenses } from './models/expenses';
import Expenses from './components/Expenses';

function App() {

  return (
    <Expenses expenses={expenses}/>
  );
}

export default App;
