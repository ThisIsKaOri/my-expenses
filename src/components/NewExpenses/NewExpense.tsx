import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { Expense } from '../../models/expenses';
import { useState } from 'react';

type Props = {
    
    onAdd: (expense: Expense) => void;
}

const NewExpense = ({onAdd}: Props) => {

    const[editing, setEditing] = useState(false);
    const editingHandler = () => {
        
        setEditing(!editing);
    }

    const submittedDataHandler = ({title, amount, date} : 
        {title: string,  amount: number, date: Date}) => {

        const newExpense = {

            id: Math.random().toString(),
            title: title,
            amount: amount,
            date: date
        };

        onAdd(newExpense);
    }

    return(
        <div className='new-expense'>
            {!editing && <button onClick={editingHandler}>Add New Expense</button>}
            {editing && <ExpenseForm onCancel={editingHandler} onSubmit={submittedDataHandler}/>}
        </div>
    );
};

export default NewExpense;