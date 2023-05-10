import './Expenses.css';

import { Expense } from '../models/expenses';
import ExpenseItem from './ExpenseItem';


type Props = {
    expenses: Expense[];
}

const Expenses = ({expenses}: Props) => {
    
    return (
        <div className="expenses">
        {expenses.map((item) => <ExpenseItem expense={item}/>)}
        </div>
    );
};

export default Expenses;