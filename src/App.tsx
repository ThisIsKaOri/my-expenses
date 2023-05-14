import './App.css';

import { Expense, expenses as storedExpenses } from './models/expenses';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { Dispatch, SetStateAction, useState } from 'react';


function App() {

const [expenses, setExpenses] : 
[Expense[], Dispatch<SetStateAction<Expense[]>>] = useState([...storedExpenses]);

  const newExpenseHandler = (expense: Expense) => {
    
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className='App-header'>
      <NewExpense onAdd={newExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
