import './App.css';

import { Expense, expenses } from './models/expenses';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {

  const newExpenseHandler = (expense: Expense) => {
    console.log(expense);  
  };

  return (
    <>
      <NewExpense onAdd={newExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </>
  );
}

export default App;
